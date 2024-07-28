import type { FindHeadwears, FindHeadwearsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Headwears from 'src/components/Headwear/Headwears'

export const QUERY: TypedDocumentNode<
  FindHeadwears,
  FindHeadwearsVariables
> = gql`
  query FindHeadwears {
    headwears {
      id
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No headwears yet. '}
      <Link to={routes.newHeadwear()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindHeadwears>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  headwears,
}: CellSuccessProps<FindHeadwears, FindHeadwearsVariables>) => {
  return <Headwears headwears={headwears} />
}
