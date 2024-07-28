import type { FindFitById, FindFitByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Fit from 'src/components/Fit/Fit'

export const QUERY: TypedDocumentNode<FindFitById, FindFitByIdVariables> = gql`
  query FindFitById($id: Int!) {
    fit: fit(id: $id) {
      id
      createdAt
      userId
      headwearId
      shirtId
      pantId
      shoesId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Fit not found</div>

export const Failure = ({ error }: CellFailureProps<FindFitByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  fit,
}: CellSuccessProps<FindFitById, FindFitByIdVariables>) => {
  return <Fit fit={fit} />
}
