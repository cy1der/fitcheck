export const schema = gql`
  type Shirt {
    id: Int!
    imageUrl: String!
    createdAt: DateTime!
    Fit: [Fit]!
  }

  type Query {
    shirts: [Shirt!]! @requireAuth
    shirt(id: Int!): Shirt @requireAuth
  }

  input CreateShirtInput {
    imageUrl: String!
  }

  input UpdateShirtInput {
    imageUrl: String
  }

  type Mutation {
    createShirt(input: CreateShirtInput!): Shirt! @requireAuth
    updateShirt(id: Int!, input: UpdateShirtInput!): Shirt! @requireAuth
    deleteShirt(id: Int!): Shirt! @requireAuth
  }
`
