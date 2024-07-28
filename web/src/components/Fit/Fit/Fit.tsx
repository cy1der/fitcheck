import type {
  DeleteFitMutation,
  DeleteFitMutationVariables,
  FindFitById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_FIT_MUTATION: TypedDocumentNode<
  DeleteFitMutation,
  DeleteFitMutationVariables
> = gql`
  mutation DeleteFitMutation($id: Int!) {
    deleteFit(id: $id) {
      id
    }
  }
`

interface Props {
  fit: NonNullable<FindFitById['fit']>
}

const Fit = ({ fit }: Props) => {
  const [deleteFit] = useMutation(DELETE_FIT_MUTATION, {
    onCompleted: () => {
      toast.success('Fit deleted')
      navigate(routes.fits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteFitMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete fit ' + id + '?')) {
      deleteFit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Fit {fit.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fit.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(fit.createdAt)}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{fit.userId}</td>
            </tr>
            <tr>
              <th>Headwear id</th>
              <td>{fit.headwearId}</td>
            </tr>
            <tr>
              <th>Shirt id</th>
              <td>{fit.shirtId}</td>
            </tr>
            <tr>
              <th>Pant id</th>
              <td>{fit.pantId}</td>
            </tr>
            <tr>
              <th>Shoes id</th>
              <td>{fit.shoesId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFit({ id: fit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fit.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Fit
