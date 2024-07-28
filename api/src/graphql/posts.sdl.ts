export const schema = gql`
  type Post {
    id: Int!
    fit: Fit!
    fitId: Int!
    likes: [Like]!
    createdAt: DateTime!
    User: User
    userId: Int
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    fitId: Int!
    userId: Int
  }

  input UpdatePostInput {
    fitId: Int
    userId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
