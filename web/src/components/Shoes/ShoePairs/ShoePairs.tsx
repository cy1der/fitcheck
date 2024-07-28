import type { FindShoePairs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const ShoePairsList = ({ shoePairs }: FindShoePairs) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,18rem)] justify-center gap-4">
      {shoePairs.map((shoes, index) => {
        return (
          <Link to={routes.newFit({ shoes: shoes.id })} key={index}>
            <img
              src={shoes.imageUrl}
              alt={`Shoes ${shoes.id}`}
              className="btn h-64 w-72"
            />
          </Link>
        )
      })}
    </div>
  )
}

export default ShoePairsList
