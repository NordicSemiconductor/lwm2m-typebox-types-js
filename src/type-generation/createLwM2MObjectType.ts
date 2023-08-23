import os from 'node:os'
import ts from 'typescript'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition.js'
import { addDocBlock } from './addDocBlock.js'
import { cleanWhitespace } from './cleanWhitespace.js'
import { createResourceType } from './createLwM2MResourceType.js'
import { typeName } from './typeName.js'
import { wrap } from './wrap.js'

export const wrapLongLines = wrap(76)

const asNumber = (b: boolean) => (b ? 0 : 1)

export const createLwM2MObjectType = ({
	ObjectID,
	Name,
	LWM2MVersion: LWM2MVersion,
	ObjectVersion,
	MultipleInstances,
	Mandatory,
	Resources,
	Description1,
}: LwM2MObjectDefinition): ts.Node[] => {
	const resources = []
	for (const [id, Resource] of Object.entries(Resources)) {
		resources.push(createResourceType(id, Resource))
	}

	let type: ts.TypeNode = ts.factory.createTypeLiteralNode(
		resources
			// sort by id
			.sort(({ id: id1 }, { id: id2 }) => parseInt(id1, 10) - parseInt(id2, 10))
			// sort mandatory up
			.sort(
				({ isOptional: optional1 }, { isOptional: optional2 }) =>
					asNumber(optional1) - asNumber(optional2),
			)
			.map((resource) => {
				const p = ts.factory.createPropertySignature(
					undefined,
					ts.factory.createStringLiteral(`${resource.id}`),
					resource.isOptional ?? false
						? undefined
						: ts.factory.createToken(ts.SyntaxKind.QuestionToken),
					ts.factory.createTypeReferenceNode(
						ts.factory.createIdentifier(resource.name),
					),
				)
				return p
			}),
	)

	// FIXME: minItems 1 => [item, ...item]
	if (MultipleInstances)
		type = ts.factory.createTypeReferenceNode('Array', [type])

	const objectTypeExport = ts.factory.createTypeAliasDeclaration(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(typeName(ObjectID, Name)),
		undefined,
		ts.factory.createTypeReferenceNode('Readonly', [type]),
	)

	addDocBlock(
		[
			Name,
			``,
			...cleanWhitespace(Description1).split(os.EOL).map(wrapLongLines).flat(),
			``,
			`@see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/${ObjectID}.xml`,
			``,
			`ID: ${ObjectID}`,
			`LWM2MVersion: ${LWM2MVersion}`,
			`ObjectVersion: ${ObjectVersion}`,
			`MultipleInstances: ${MultipleInstances}`,
			`Mandatory: ${Mandatory}`,
		],
		objectTypeExport,
	)

	return [objectTypeExport, ...resources.map((resource) => resource.type)]
}
