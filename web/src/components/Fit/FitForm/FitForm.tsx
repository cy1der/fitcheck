import { mdiTshirtCrew, mdiSunglasses, mdiShoeSneaker } from '@mdi/js'
import Icon from '@mdi/react'
import type {
  EditFitById,
  Headwear,
  Shirt,
  Shoes,
  Pant,
  UpdateFitInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

type FormFit = NonNullable<EditFitById['fit']>

interface FitFormProps {
  fit?: EditFitById['fit']
  onSave: (data: UpdateFitInput, id?: FormFit['id']) => void
  error: RWGqlError
  loading: boolean

  headwear?: Headwear
  shirt?: Shirt
  pants?: Pant
  shoes?: Shoes
}

const FitForm = (props: FitFormProps) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 grid-rows-4 gap-y-8">
          <Link
            to={routes.headwears()}
            className="btn h-full max-h-64 w-full max-w-64 rounded-3xl"
          >
            {props.headwear ? (
              <img
                src={props.headwear.imageUrl}
                alt="Selected headwear"
                className="h-full w-full p-8"
              />
            ) : (
              <Icon path={mdiSunglasses} className="h-full w-full p-8" />
            )}
          </Link>
          <Link
            to={routes.shirts()}
            className="btn h-full max-h-64 w-full max-w-64 rounded-3xl"
          >
            <Icon path={mdiTshirtCrew} className="h-full w-full p-8" />
          </Link>
          <Link
            to={routes.pants()}
            className="btn h-full max-h-64 w-full max-w-64 rounded-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-base-content"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
            >
              <polygon points="368.8,68.5 143.2,68.5 124.4,443.5 218.2,443.5 255.7,218.5 255.7,216 256.3,218.5 293.8,443.5 387.6,443.5 " />
            </svg>
          </Link>
          <Link
            to={routes.shoePairs()}
            className="btn h-full max-h-64 w-full max-w-64 rounded-3xl"
          >
            <Icon path={mdiShoeSneaker} className="h-full w-full p-8" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default FitForm
