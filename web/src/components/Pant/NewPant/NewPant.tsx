import { useState } from 'react'

import type {
  CreatePantMutation,
  CreatePantMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Camera from 'src/components/Camera/Camera'

import PantsCell from '../PantsCell'

const CREATE_PANT_MUTATION: TypedDocumentNode<
  CreatePantMutation,
  CreatePantMutationVariables
> = gql`
  mutation CreatePantMutation($input: CreatePantInput!) {
    createPant(input: $input) {
      id
    }
  }
`

const NewPant = () => {
  const [createPant, { loading }] = useMutation(CREATE_PANT_MUTATION, {
    onCompleted: () => {
      toast.success('Pant created')
      setView(View.browse)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  enum View {
    choice,
    upload,
    browse,
  }

  const [view, setView] = useState<View>(View.choice)

  const renderView = () => {
    switch (view) {
      case View.upload:
        return (
          <div>
            <Camera
              onCaptureComplete={(url) =>
                createPant({
                  variables: {
                    input: {
                      imageUrl: url,
                    },
                  },
                })
              }
            />
          </div>
        )
      case View.browse:
        return <div>{<PantsCell />}</div>
      case View.choice:
      default:
        return (
          <div className="flex justify-center space-x-4">
            <button className="btn btn-lg" onClick={() => setView(View.upload)}>
              Upload
            </button>
            <button className="btn btn-lg" onClick={() => setView(View.browse)}>
              Browse
            </button>
          </div>
        )
    }
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {renderView()}
    </>
  )
}

export default NewPant
