import type { FindPantById, FindPantByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Pant from 'src/components/Pant/Pant'

export const QUERY: TypedDocumentNode<
  FindPantById,
  FindPantByIdVariables
> = gql`
  query FindPantById($id: Int!) {
    pant: pant(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Pant not found</div>

export const Failure = ({ error }: CellFailureProps<FindPantByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pant,
}: CellSuccessProps<FindPantById, FindPantByIdVariables>) => {
  return <Pant pant={pant} />
}
