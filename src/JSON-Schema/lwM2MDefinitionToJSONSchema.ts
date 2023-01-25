import S, { JSONSchema } from 'fluent-json-schema'
import {
	LwM2MObjectDefinition,
	LwM2MType,
} from '../lwm2m/LwM2MObjectDefinition'

/**
 * Converts the given LwM2M object definition into a JSON schema
 */
export const lwM2MDefinitionToJSONSchema = ({
	ObjectID,
	Name,
	LWM2MVersion: LWM2MVersion,
	ObjectVersion,
	MultipleInstances,
	Mandatory,
	Description1,
	Resources,
}: LwM2MObjectDefinition): Record<string, any> => {
	const description = [
		Description1,
		`LWM2MVersion: ${LWM2MVersion}`,
		`ObjectVersion: ${ObjectVersion}`,
		`MultipleInstances: ${MultipleInstances}`,
		`Mandatory: ${Mandatory}`,
	].join(' ')
	let lwm2mObjectSchema = S.object()
		.id(
			`https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/${ObjectID}.xml`,
		)
		.title(Name.trim())
		.description(description.trim())
		.additionalProperties(false)

	for (const [
		ResourceID,
		{
			Name,
			Type,
			RangeEnumeration,
			Description,
			Units,
			Mandatory,
			MultipleInstances,
		},
	] of Object.entries(Resources)) {
		let prop: JSONSchema | undefined = undefined
		const description = [Description.trim()]
		switch (Type) {
			case LwM2MType.Float:
				prop = S.number()
				break
			case LwM2MType.Integer:
			case LwM2MType.UnsignedInteger:
				prop = S.integer()
				if (RangeEnumeration !== undefined) {
					if ('min' in RangeEnumeration) {
						prop = prop.minimum(RangeEnumeration.min)
						prop = prop.maximum(RangeEnumeration.max)
					} else {
						// TODO: Implement enums for now, because there is only 1 (one) object definition that uses. Revisit if there are more than 1.
					}
				}
				break
			case LwM2MType.Boolean:
				/**
				 * In LwM2M Boolean is an 8 bit unsigned integer with the value 0 for False and the value 1 for True.
				 * @see https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf Pag 106 Table: C.-1 Data Types
				 */
				prop = S.integer().minimum(0).maximum(1)
				break
			case LwM2MType.Objlnk:
				prop = S.string().pattern('^dd:dd$')
				break
			case LwM2MType.String:
			case LwM2MType.Opaque:
				prop = S.string()
				if (RangeEnumeration !== undefined) {
					if ('min' in RangeEnumeration) {
						prop = prop.minLength(RangeEnumeration.min)
						prop = prop.maxLength(RangeEnumeration.max)
					}
				}
				break
			case LwM2MType.Time:
				// A custom keyword "unixTimestamp" is added to the property
				// so it can be inferred from the schema that this value is
				// supposed to be a LwM2M Timestamp.
				prop = S.raw({ type: 'integer', unixTimestamp: true })
				description.push(
					'Unix Time. A signed integer representing the number of seconds since Jan 1 st, 1970 in the UTC time zone.',
				)
				break
			case LwM2MType.Corelnk:
				prop = S.string()
					.pattern('^</[^>]+>(;[^=]+="[^"]+")*$')
					.description(
						'RFC 6690 link, see https://www.rfc-editor.org/rfc/rfc6690.html',
					)
				break
			default:
				throw new Error(
					`Unknown type: '${Type}' on Object ${ObjectID}, Resource ${ResourceID}!`,
				)
		}

		if (MultipleInstances) {
			prop = S.array().minItems(1).items(prop)
		}
		if (Mandatory) {
			prop = prop.required()
		}
		prop = prop.title(Name.trim())

		if (Units !== undefined) {
			description.push(`Units: ${Units}.`)
		}

		prop = prop.description(description.join(' '))
		lwm2mObjectSchema = lwm2mObjectSchema.prop(ResourceID, prop)
	}

	if (MultipleInstances) {
		return S.array()
			.minItems(1)
			.title(Name.trim())
			.description(description.trim())
			.items(lwm2mObjectSchema)
			.valueOf()
	}

	return lwm2mObjectSchema.valueOf()
}
