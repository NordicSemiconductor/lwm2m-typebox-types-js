export * from './dist/type-generation/createURN.js'
export * from './dist/validate.js'
export * from './types-dist/LwM2M.js'
export * from './types-dist/LwM2MDocument.js'
import schema from './LwM2MDocument.schema.json' assert { type: 'json' }
export const LwM2MDocumentSchema = schema
export { parseURN } from './src/type-generation/parseURN.js'
