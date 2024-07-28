import type {
  EditShirtById,
  UpdateShirtInput,
  UpdateShirtMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShirtForm from 'src/components/Shirt/ShirtForm'

export const QUERY: TypedDocumentNode<EditShirtById> = gql`
  query EditShirtById($id: Int!) {
    shirt: shirt(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

const UPDATE_SHIRT_MUTATION: TypedDocumentNode<
  EditShirtById,
  UpdateShirtMutationVariables
> = gql`
  mutation UpdateShirtMutation($id: Int!, $input: UpdateShirtInput!) {
    updateShirt(id: $id, input: $input) {
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

export const Success = ({ shirt }: CellSuccessProps<EditShirtById>) => {
  const [updateShirt, { loading, error }] = useMutation(UPDATE_SHIRT_MUTATION, {
    onCompleted: () => {
      toast.success('Shirt updated')
      navigate(routes.shirts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateShirtInput,
    id: EditShirtById['shirt']['id']
  ) => {
    updateShirt({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Shirt {shirt?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShirtForm
          shirt={shirt}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
