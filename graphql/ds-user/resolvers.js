const hashPassword = require('./helpers/hashPassword')
const { createAccessToken } = require('./helpers/createTokens')
module.exports = {
  Query: {
    hello: () => 'Hello Mohamed',
    users: async (_, _args, { prisma }, info) => {
      try {
        const result = await prisma.user.findMany({
          include: {
            posts: true
          }
        })
        return result
      } catch (ex) {
        console.log(ex)
      }

      return null
    }
  },
  Mutation: {
    signUp: async (_, { name, email, password }, { prisma }, info) => {
      const user = await prisma.user.findOne({
        where: {
          email
        },
        select: {
          id: true
        }
      })
      if (user && user.id) {
        throw new Error('Wrong email or password!')
      }
      const hashedPassword = await hashPassword(password)
      const result = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword
        },
        select: {
          id: true,
          email: true,
          name: true
        }
      })

      return {
        email: result.email,
        name: result.name,
        token: createAccessToken(result)
      }
    }
  }
}
