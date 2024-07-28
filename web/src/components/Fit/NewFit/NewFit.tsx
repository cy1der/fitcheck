import type {
  CreateFitMutation,
  CreateFitInput,
  CreateFitMutationVariables,
  Headwear,
  Pant,
  Shirt,
  Shoes,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FitForm from 'src/components/Fit/FitForm'

interface NewFitFormProps {
  headwear?: number
  shirt?: number
  pants?: number
  shoes?: number
}

const CREATE_FIT_MUTATION: TypedDocumentNode<
  CreateFitMutation,
  CreateFitMutationVariables
> = gql`
  mutation CreateFitMutation($input: CreateFitInput!) {
    createFit(input: $input) {
      id
    }
  }
`

const NewFit = (props: NewFitFormProps) => {
  const [createFit, { loading, error }] = useMutation(CREATE_FIT_MUTATION, {
    onCompleted: () => {
      toast.success('Fit created')
      navigate(routes.fits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateFitInput) => {
    createFit({ variables: { input } })
  }

  return (
    <FitForm
      onSave={onSave}
      loading={loading}
      error={error}
      headwear={props.headwear}
      shirt={props.shirt}
      pants={props.pants}
      shoes={props.shoes}
    />
  )
}

export default NewFit
