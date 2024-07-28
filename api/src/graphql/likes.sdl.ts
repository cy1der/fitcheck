export const schema = gql`
  type Like {
    id: Int!
    user: User!
    userId: Int!
    createdAt: DateTime!
    Post: Post
    postId: Int
  }

  type Query {
    likes: [Like!]! @requireAuth
    like(id: Int!): Like @requireAuth
  }

  input CreateLikeInput {
    userId: Int!
    postId: Int
  }

  input UpdateLikeInput {
    userId: Int
    postId: Int
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @requireAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @requireAuth
    deleteLike(id: Int!): Like! @requireAuth
  }
`
