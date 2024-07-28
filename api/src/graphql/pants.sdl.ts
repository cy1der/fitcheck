export const schema = gql`
  type Pant {
    id: Int!
    imageUrl: String!
    createdAt: DateTime!
    Fit: [Fit]!
  }

  type Query {
    pants: [Pant!]! @requireAuth
    pant(id: Int!): Pant @requireAuth
  }

  input CreatePantInput {
    imageUrl: String!
  }

  input UpdatePantInput {
    imageUrl: String
  }

  type Mutation {
    createPant(input: CreatePantInput!): Pant! @requireAuth
    updatePant(id: Int!, input: UpdatePantInput!): Pant! @requireAuth
    deletePant(id: Int!): Pant! @requireAuth
  }
`
