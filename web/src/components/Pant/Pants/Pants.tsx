import type { FindPants } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const PantsList = ({ pants }: FindPants) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,18rem)] justify-center gap-4">
      {pants.map((pant, index) => {
        return (
          <Link to={routes.newFit({ pant: pant.id })} key={index}>
            <img
              src={pant.imageUrl}
              alt={`Pant ${pant.id}`}
              className="btn h-64 w-72"
            />
          </Link>
        )
      })}
    </div>
  )
}

export default PantsList
