import type { FindShoePairs, FindShoePairsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ShoePairs from 'src/components/Shoes/ShoePairs'

export const QUERY: TypedDocumentNode<
  FindShoePairs,
  FindShoePairsVariables
> = gql`
  query FindShoePairs {
    shoePairs {
      id
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shoePairs yet. '}
      <Link to={routes.newShoes()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindShoePairs>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  shoePairs,
}: CellSuccessProps<FindShoePairs, FindShoePairsVariables>) => {
  return <ShoePairs shoePairs={shoePairs} />
}
