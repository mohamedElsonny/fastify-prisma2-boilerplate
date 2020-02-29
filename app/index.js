const Fastify = require('fastify')
const GQL = require('fastify-gql')
const app = Fastify()

const { schema, context } = require('../graphql')

app.register(GQL, {
  schema,
  context,
  subscription: true,
  path: '/',
  graphiql: process.env.NODE_ENV !== 'production' ? 'playground' : false
})

module.exports = app
