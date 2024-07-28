import type {
  DeleteHeadwearMutation,
  DeleteHeadwearMutationVariables,
  FindHeadwearById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_HEADWEAR_MUTATION: TypedDocumentNode<
  DeleteHeadwearMutation,
  DeleteHeadwearMutationVariables
> = gql`
  mutation DeleteHeadwearMutation($id: Int!) {
    deleteHeadwear(id: $id) {
      id
    }
  }
`

interface Props {
  headwear: NonNullable<FindHeadwearById['headwear']>
}

const Headwear = ({ headwear }: Props) => {
  const [deleteHeadwear] = useMutation(DELETE_HEADWEAR_MUTATION, {
    onCompleted: () => {
      toast.success('Headwear deleted')
      navigate(routes.headwears())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteHeadwearMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete headwear ' + id + '?')) {
      deleteHeadwear({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Headwear {headwear.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{headwear.id}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{headwear.imageUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(headwear.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHeadwear({ id: headwear.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(headwear.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Headwear
