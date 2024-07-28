import type {
  DeletePantMutation,
  DeletePantMutationVariables,
  FindPantById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PANT_MUTATION: TypedDocumentNode<
  DeletePantMutation,
  DeletePantMutationVariables
> = gql`
  mutation DeletePantMutation($id: Int!) {
    deletePant(id: $id) {
      id
    }
  }
`

interface Props {
  pant: NonNullable<FindPantById['pant']>
}

const Pant = ({ pant }: Props) => {
  const [deletePant] = useMutation(DELETE_PANT_MUTATION, {
    onCompleted: () => {
      toast.success('Pant deleted')
      navigate(routes.pants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePantMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pant ' + id + '?')) {
      deletePant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Pant {pant.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pant.id}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{pant.imageUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(pant.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPant({ id: pant.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pant.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Pant
