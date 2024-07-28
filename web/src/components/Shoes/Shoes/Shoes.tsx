import type {
  DeleteShoesMutation,
  DeleteShoesMutationVariables,
  FindShoesById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_SHOES_MUTATION: TypedDocumentNode<
  DeleteShoesMutation,
  DeleteShoesMutationVariables
> = gql`
  mutation DeleteShoesMutation($id: Int!) {
    deleteShoes(id: $id) {
      id
    }
  }
`

interface Props {
  shoes: NonNullable<FindShoesById['shoes']>
}

const Shoes = ({ shoes }: Props) => {
  const [deleteShoes] = useMutation(DELETE_SHOES_MUTATION, {
    onCompleted: () => {
      toast.success('Shoes deleted')
      navigate(routes.shoePairs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteShoesMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shoes ' + id + '?')) {
      deleteShoes({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Shoes {shoes.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shoes.id}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{shoes.imageUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(shoes.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShoes({ id: shoes.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shoes.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Shoes
