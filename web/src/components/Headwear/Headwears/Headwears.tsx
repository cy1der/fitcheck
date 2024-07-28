import type { FindHeadwears } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const HeadwearsList = ({ headwears }: FindHeadwears) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,18rem)] justify-center gap-4">
      {headwears.map((headwear, index) => {
        return (
          <Link to={routes.newFit({ headwear: headwear.id })} key={index}>
            <img
              src={headwear.imageUrl}
              alt={`Headwear ${headwear.id}`}
              className="btn h-64 w-72"
            />
          </Link>
        )
      })}
    </div>
  )
}

export default HeadwearsList
