export const schema = gql`
  type Fit {
    id: Int!
    top: Headwear
    shirt: Shirt!
    pants: Pant!
    shoes: Shoes!
    createdAt: DateTime!
    Post: [Post]!
    User: User
    userId: Int
    headwearId: Int
    shirtId: Int!
    pantId: Int!
    shoesId: Int!
  }

  type Query {
    fits: [Fit!]! @requireAuth
    fit(id: Int!): Fit @requireAuth
  }

  input CreateFitInput {
    userId: Int
    headwearId: Int
    shirtId: Int!
    pantId: Int!
    shoesId: Int!
  }

  input UpdateFitInput {
    userId: Int
    headwearId: Int
    shirtId: Int
    pantId: Int
    shoesId: Int
  }

  type Mutation {
    createFit(input: CreateFitInput!): Fit! @requireAuth
    updateFit(id: Int!, input: UpdateFitInput!): Fit! @requireAuth
    deleteFit(id: Int!): Fit! @requireAuth
  }
`
