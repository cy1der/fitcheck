import type {
  EditHeadwearById,
  UpdateHeadwearInput,
  UpdateHeadwearMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HeadwearForm from 'src/components/Headwear/HeadwearForm'

export const QUERY: TypedDocumentNode<EditHeadwearById> = gql`
  query EditHeadwearById($id: Int!) {
    headwear: headwear(id: $id) {
      id
      imageUrl
      createdAt
    }
  }
`

const UPDATE_HEADWEAR_MUTATION: TypedDocumentNode<
  EditHeadwearById,
  UpdateHeadwearMutationVariables
> = gql`
  mutation UpdateHeadwearMutation($id: Int!, $input: UpdateHeadwearInput!) {
    updateHeadwear(id: $id, input: $input) {
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

export const Success = ({ headwear }: CellSuccessProps<EditHeadwearById>) => {
  const [updateHeadwear, { loading, error }] = useMutation(
    UPDATE_HEADWEAR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Headwear updated')
        navigate(routes.headwears())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateHeadwearInput,
    id: EditHeadwearById['headwear']['id']
  ) => {
    updateHeadwear({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Headwear {headwear?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <HeadwearForm
          headwear={headwear}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
