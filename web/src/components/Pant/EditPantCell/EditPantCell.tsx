import type {
  EditPantById,
  UpdatePantInput,
  UpdatePantMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PantForm from 'src/components/Pant/PantForm'

export const QUERY: TypedDocumentNode<EditPantById> = gql`
  query EditPantById($id: Int!) {
    pant: pant(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

const UPDATE_PANT_MUTATION: TypedDocumentNode<
  EditPantById,
  UpdatePantMutationVariables
> = gql`
  mutation UpdatePantMutation($id: Int!, $input: UpdatePantInput!) {
    updatePant(id: $id, input: $input) {
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

export const Success = ({ pant }: CellSuccessProps<EditPantById>) => {
  const [updatePant, { loading, error }] = useMutation(UPDATE_PANT_MUTATION, {
    onCompleted: () => {
      toast.success('Pant updated')
      navigate(routes.pants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdatePantInput, id: EditPantById['pant']['id']) => {
    updatePant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Pant {pant?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PantForm pant={pant} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
