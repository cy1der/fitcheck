import type { FindFits, FindFitsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Fits from 'src/components/Fit/Fits'

export const QUERY: TypedDocumentNode<FindFits, FindFitsVariables> = gql`
  query FindFits {
    fits {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fits yet. '}
      <Link to={routes.newFit()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindFits>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  fits,
}: CellSuccessProps<FindFits, FindFitsVariables>) => {
  return <Fits fits={fits} />
}
