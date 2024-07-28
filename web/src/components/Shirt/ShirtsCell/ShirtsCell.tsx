import type { FindShirts, FindShirtsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Shirts from 'src/components/Shirt/Shirts'

export const QUERY: TypedDocumentNode<FindShirts, FindShirtsVariables> = gql`
  query FindShirts {
    shirts {
      id
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shirts yet. '}
      <Link to={routes.newShirt()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindShirts>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  shirts,
}: CellSuccessProps<FindShirts, FindShirtsVariables>) => {
  return <Shirts shirts={shirts} />
}
