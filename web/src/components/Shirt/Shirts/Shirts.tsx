import type { FindShirts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const ShirtsList = ({ shirts }: FindShirts) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,18rem)] justify-center gap-4">
      {shirts.map((shirt, index) => {
        return (
          <Link to={routes.newFit({ shirt: shirt.id })} key={index}>
            <img
              src={shirt.imageUrl}
              alt={`Shirt ${shirt.id}`}
              className="btn h-64 w-72"
            />
          </Link>
        )
      })}
    </div>
  )
}

export default ShirtsList
