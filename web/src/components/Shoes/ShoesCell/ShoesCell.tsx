import type { FindShoesById, FindShoesByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Shoes from 'src/components/Shoes/Shoes'

export const QUERY: TypedDocumentNode<
  FindShoesById,
  FindShoesByIdVariables
> = gql`
  query FindShoesById($id: Int!) {
    shoes: shoes(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Shoes not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindShoesByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  shoes,
}: CellSuccessProps<FindShoesById, FindShoesByIdVariables>) => {
  return <Shoes shoes={shoes} />
}
