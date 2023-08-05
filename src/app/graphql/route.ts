import { createSchema, createYoga } from 'graphql-yoga'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { usersTypeDefs } from './users/users.schema'
import { usersResolvers } from './users/users.resolver'
import { connectDB } from '@/lib/connectDB'

const typeDefs = mergeTypeDefs([usersTypeDefs])
const resolvers = mergeResolvers([usersResolvers])

connectDB()

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/graphql',
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }

export const runtime = 'edge'
