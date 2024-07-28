import { useState } from 'react'

import type {
  CreateHeadwearMutation,
  CreateHeadwearMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Camera from 'src/components/Camera/Camera'

import HeadwearsCell from '../HeadwearsCell'

const CREATE_HEADWEAR_MUTATION: TypedDocumentNode<
  CreateHeadwearMutation,
  CreateHeadwearMutationVariables
> = gql`
  mutation CreateHeadwearMutation($input: CreateHeadwearInput!) {
    createHeadwear(input: $input) {
      id
    }
  }
`

const NewHeadwear = () => {
  const [createHeadwear, { loading }] = useMutation(CREATE_HEADWEAR_MUTATION, {
    onCompleted: () => {
      toast.success('Headwear created')
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
                createHeadwear({
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
        return <div>{<HeadwearsCell />}</div>
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

export default NewHeadwear
