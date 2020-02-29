const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = schema
