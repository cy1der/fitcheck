import type {
  EditShoesById,
  UpdateShoesInput,
  UpdateShoesMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShoesForm from 'src/components/Shoes/ShoesForm'

export const QUERY: TypedDocumentNode<EditShoesById> = gql`
  query EditShoesById($id: Int!) {
    shoes: shoes(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

const UPDATE_SHOES_MUTATION: TypedDocumentNode<
  EditShoesById,
  UpdateShoesMutationVariables
> = gql`
  mutation UpdateShoesMutation($id: Int!, $input: UpdateShoesInput!) {
    updateShoes(id: $id, input: $input) {
      id
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoes }: CellSuccessProps<EditShoesById>) => {
  const [updateShoes, { loading, error }] = useMutation(UPDATE_SHOES_MUTATION, {
    onCompleted: () => {
      toast.success('Shoes updated')
      navigate(routes.shoePairs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateShoesInput,
    id: EditShoesById['shoes']['id']
  ) => {
    updateShoes({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Shoes {shoes?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShoesForm
          shoes={shoes}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
