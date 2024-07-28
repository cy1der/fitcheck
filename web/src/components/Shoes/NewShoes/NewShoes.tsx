import { useState } from 'react'

import type {
  CreateShoesMutation,
  CreateShoesMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Camera from 'src/components/Camera/Camera'

import ShoePairsCell from '../ShoePairsCell'

const CREATE_SHOEPAIR_MUTATION: TypedDocumentNode<
  CreateShoesMutation,
  CreateShoesMutationVariables
> = gql`
  mutation CreateShoesMutation($input: CreateShoesInput!) {
    createShoes(input: $input) {
      id
    }
  }
`

const NewShoes = () => {
  const [createShoes, { loading }] = useMutation(CREATE_SHOEPAIR_MUTATION, {
    onCompleted: () => {
      toast.success('Shoes created')
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
                createShoes({
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
        return <div>{<ShoePairsCell />}</div>
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

export default NewShoes
