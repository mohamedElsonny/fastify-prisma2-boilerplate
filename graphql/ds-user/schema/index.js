const { importSchema } = require('graphql-import')
const path = require('path')
const typeDefs = importSchema(path.resolve(__dirname, 'schema.graphql'))

module.exports = typeDefs
