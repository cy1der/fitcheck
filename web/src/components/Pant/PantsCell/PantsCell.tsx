import type { FindPants, FindPantsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Pants from 'src/components/Pant/Pants'

export const QUERY: TypedDocumentNode<
  FindPants,
  FindPantsVariables
> = gql`
  query FindPants {
    pants {
      id
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pants yet. '}
      <Link to={routes.newPant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindPants>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pants,
}: CellSuccessProps<FindPants, FindPantsVariables>) => {
  return <Pants pants={pants} />
}
