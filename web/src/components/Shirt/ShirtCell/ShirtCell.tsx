import type { FindShirtById, FindShirtByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Shirt from 'src/components/Shirt/Shirt'

export const QUERY: TypedDocumentNode<
  FindShirtById,
  FindShirtByIdVariables
> = gql`
  query FindShirtById($id: Int!) {
    shirt: shirt(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Shirt not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindShirtByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  shirt,
}: CellSuccessProps<FindShirtById, FindShirtByIdVariables>) => {
  return <Shirt shirt={shirt} />
}
