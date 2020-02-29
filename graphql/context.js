const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = (request, reply) => {
  return {
    request,
    reply,
    prisma
  }
}
