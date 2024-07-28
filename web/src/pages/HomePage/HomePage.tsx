import '../../index.css'
import { mdiHanger } from '@mdi/js'
import Icon from '@mdi/react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="my-auto">
        <h1 className="p-8 text-center text-5xl font-bold">fitcheck</h1>
      </div>

      <div className="flex justify-center">
        <Icon
          path={mdiHanger}
          className="h-80 w-80 rounded-3xl bg-neutral p-4 text-logo"
        />
      </div>

      {isAuthenticated ? (
        <div className="mt-24 flex w-auto justify-center">
          <Link
            to={routes.hub()}
            className="btn rounded-3xl bg-primary px-24 py-16 pt-8 text-2xl hover:bg-neutral"
          >
            Explore Fits
          </Link>
        </div>
      ) : (
        <div className="mt-24 flex w-auto justify-center">
          <Link
            to={routes.signup()}
            className="btn rounded-3xl bg-primary px-24 py-16 pt-8 text-2xl hover:bg-neutral"
          >
            Get Started
          </Link>
        </div>
      )}

      {/* <div className="mt-24 flex w-auto justify-center">
        <Link
          to={routes.main()}
          className="btn rounded-3xl bg-primary px-24 py-16 pt-8 text-2xl hover:bg-neutral"
        >
          work on main page
        </Link>
      </div> */}
    </>
  )
}

export default HomePage
