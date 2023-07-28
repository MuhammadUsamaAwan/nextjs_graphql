export const usersTypeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }

  type User {
    _id: String!
    username: String!
    email: String!
    phone: String!
    linkedinProfileUrl: String!
    companyName: String!
  }
`
