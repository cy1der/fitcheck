import type {
  DeleteShirtMutation,
  DeleteShirtMutationVariables,
  FindShirtById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_SHIRT_MUTATION: TypedDocumentNode<
  DeleteShirtMutation,
  DeleteShirtMutationVariables
> = gql`
  mutation DeleteShirtMutation($id: Int!) {
    deleteShirt(id: $id) {
      id
    }
  }
`

interface Props {
  shirt: NonNullable<FindShirtById['shirt']>
}

const Shirt = ({ shirt }: Props) => {
  const [deleteShirt] = useMutation(DELETE_SHIRT_MUTATION, {
    onCompleted: () => {
      toast.success('Shirt deleted')
      navigate(routes.shirts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteShirtMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shirt ' + id + '?')) {
      deleteShirt({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Shirt {shirt.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shirt.id}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{shirt.imageUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(shirt.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShirt({ id: shirt.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shirt.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Shirt
