import { useState } from 'react'

import type {
  CreateShirtMutation,
  CreateShirtMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Camera from 'src/components/Camera/Camera'

import ShirtsCell from '../ShirtsCell'

const CREATE_SHIRT_MUTATION: TypedDocumentNode<
  CreateShirtMutation,
  CreateShirtMutationVariables
> = gql`
  mutation CreateShirtMutation($input: CreateShirtInput!) {
    createShirt(input: $input) {
      id
    }
  }
`

const NewShirt = () => {
  const [createShirt, { loading }] = useMutation(CREATE_SHIRT_MUTATION, {
    onCompleted: () => {
      toast.success('Shirt created')
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
                createShirt({
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
        return <div>{<ShirtsCell />}</div>
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

export default NewShirt
