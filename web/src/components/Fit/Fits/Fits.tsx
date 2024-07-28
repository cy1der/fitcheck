import type {
  DeleteFitMutation,
  DeleteFitMutationVariables,
  FindFits,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Fit/FitsCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const FitsList = ({ fits }: FindFits) => {
  const [deleteFit] = useMutation(DELETE_FIT_MUTATION, {
    onCompleted: () => {
      toast.success('Fit deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteFitMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete fit ' + id + '?')) {
      deleteFit({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>User id</th>
            <th>Headwear id</th>
            <th>Shirt id</th>
            <th>Pant id</th>
            <th>Shoes id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fits.map((fit) => (
            <tr key={fit.id}>
              <td>{truncate(fit.id)}</td>
              <td>{timeTag(fit.createdAt)}</td>
              <td>{truncate(fit.userId)}</td>
              <td>{truncate(fit.headwearId)}</td>
              <td>{truncate(fit.shirtId)}</td>
              <td>{truncate(fit.pantId)}</td>
              <td>{truncate(fit.shoesId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.fit({ id: fit.id })}
                    title={'Show fit ' + fit.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFit({ id: fit.id })}
                    title={'Edit fit ' + fit.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete fit ' + fit.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fit.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FitsList
