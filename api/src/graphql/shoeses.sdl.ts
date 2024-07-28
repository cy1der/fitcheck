export const schema = gql`
  type Shoes {
    id: Int!
    imageUrl: String!
    createdAt: DateTime!
    Fit: [Fit]!
  }

  type Query {
    shoeses: [Shoes!]! @requireAuth
    shoes(id: Int!): Shoes @requireAuth
  }

  input CreateShoesInput {
    imageUrl: String!
  }

  input UpdateShoesInput {
    imageUrl: String
  }

  type Mutation {
    createShoes(input: CreateShoesInput!): Shoes! @requireAuth
    updateShoes(id: Int!, input: UpdateShoesInput!): Shoes! @requireAuth
    deleteShoes(id: Int!): Shoes! @requireAuth
  }
`
