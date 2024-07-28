import type { FindHeadwearById, FindHeadwearByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Headwear from 'src/components/Headwear/Headwear'

export const QUERY: TypedDocumentNode<
  FindHeadwearById,
  FindHeadwearByIdVariables
> = gql`
  query FindHeadwearById($id: Int!) {
    headwear: headwear(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Headwear not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindHeadwearByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  headwear,
}: CellSuccessProps<FindHeadwearById, FindHeadwearByIdVariables>) => {
  return <Headwear headwear={headwear} />
}
