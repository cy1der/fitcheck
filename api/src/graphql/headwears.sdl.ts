export const schema = gql`
  type Headwear {
    id: Int!
    imageUrl: String!
    createdAt: DateTime!
    Fit: [Fit]!
  }

  type Query {
    headwears: [Headwear!]! @requireAuth
    headwear(id: Int!): Headwear @requireAuth
  }

  input CreateHeadwearInput {
    imageUrl: String!
  }

  input UpdateHeadwearInput {
    imageUrl: String
  }

  type Mutation {
    createHeadwear(input: CreateHeadwearInput!): Headwear! @requireAuth
    updateHeadwear(id: Int!, input: UpdateHeadwearInput!): Headwear!
      @requireAuth
    deleteHeadwear(id: Int!): Headwear! @requireAuth
  }
`
