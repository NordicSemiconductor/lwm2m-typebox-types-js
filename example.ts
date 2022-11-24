import * as assert from 'node:assert/strict'
// This is a JSON representation of LwM2M, for example stored in AWS IoT Shadow
import type { Static } from '@sinclair/typebox'
import type { LwM2MDocument } from '.'
import knowGoodShadow from './known-good-shadow.json'
import LwM2MDocumentSchema from './LwM2MDocument.schema.json'
import { validateWithJSONSchema } from './src/utils/validateWithJsonSchema'

import {
	objectURN as urnTemperature_3303,
	Temperature_3303,
} from 'typeScript-definitions/3303'

// validate shadow
const validateLwM2MJSON =
	validateWithJSONSchema<Static<typeof LwM2MDocument>>(LwM2MDocumentSchema)

// We can validate that the data is correctly defined as LwM2M
const maybeValidLwM2M = validateLwM2MJSON(knowGoodShadow)

// Because is is know to be good, there must be no errors
if ('errors' in maybeValidLwM2M) {
	console.error(maybeValidLwM2M.errors)
	throw new Error(`Validation failed`)
}

// then we can access LwM2M objects in the shadow document
const shadow = maybeValidLwM2M.value

// and we can access LwM2M objects in the shadow
assert.deepStrictEqual(shadow['1:1.2@1.2']?.[0]?.[1], 43200)
assert.deepStrictEqual(shadow['3:1.2@1.1']?.[1], 'thingy91_nrf9160')
assert.deepStrictEqual(shadow['4:1.3@1.1']?.[7]?.[0], 'ibasis.iot')
assert.deepStrictEqual(shadow['3303:1.1']?.[0]?.[5701], 'Celsius degrees')
assert.deepStrictEqual(shadow['3323:1.1']?.[0]?.[5602], 98.24)

// We can use the Types when defining JSON as well
const temperatureSensor: Temperature_3303 = [
	{
		'5518': 1665149633,
		'5601': 23.51,
		'5602': 23.51,
		'5603': -40,
		'5604': 85,
		'5700': 24.57,
		'5701': 'Celsius degrees',
	},
]

const newShadow: Static<typeof LwM2MDocument> = {
	[urnTemperature_3303]: temperatureSensor,
}

console.log(newShadow)
