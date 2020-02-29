const { mergeSchemas } = require('graphql-tools')
const context = require('./context')
const userSchema = require('./ds-user')
const directives = require('./directives')

const schema = mergeSchemas({
  schemas: [userSchema],
  schemaDirectives: {
    authenticated: directives.AuthenticatedDirective
  }
})

module.exports = {
  schema,
  context
}
