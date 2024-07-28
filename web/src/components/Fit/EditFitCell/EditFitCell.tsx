import type {
  EditFitById,
  UpdateFitInput,
  UpdateFitMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FitForm from 'src/components/Fit/FitForm'

export const QUERY: TypedDocumentNode<EditFitById> = gql`
  query EditFitById($id: Int!) {
    fit: fit(id: $id) {
      id
      createdAt
      userId
      headwearId
      shirtId
      pantId
      shoesId
    }
  }
`

const UPDATE_FIT_MUTATION: TypedDocumentNode<
  EditFitById,
  UpdateFitMutationVariables
> = gql`
  mutation UpdateFitMutation($id: Int!, $input: UpdateFitInput!) {
    updateFit(id: $id, input: $input) {
      id
      createdAt
      userId
      headwearId
      shirtId
      pantId
      shoesId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ fit }: CellSuccessProps<EditFitById>) => {
  const [updateFit, { loading, error }] = useMutation(UPDATE_FIT_MUTATION, {
    onCompleted: () => {
      toast.success('Fit updated')
      navigate(routes.fits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateFitInput, id: EditFitById['fit']['id']) => {
    updateFit({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Fit {fit?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FitForm fit={fit} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
