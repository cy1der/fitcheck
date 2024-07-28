import { mdiAccount, mdiLogout, mdiLogin } from '@mdi/js'
import Icon from '@mdi/react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

interface Props {
  mobile: boolean
  className?: string
}

const NavbarAccountIcon = ({ mobile, className }: Props) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return isAuthenticated ? (
    <div className={className}>
      <details
        className={`dropdown dropdown-end ${
          mobile ? 'space-y-2' : 'space-y-4'
        }`}
      >
        <summary className="btn btn-ghost swap swap-rotate w-12 hover:shadow-lg">
          <Icon path={mdiAccount} className="h-8 w-8 text-base-content" />
        </summary>
        <div className="dropdown-content flex w-auto flex-row items-center space-x-3 rounded-xl bg-base-100 p-3 shadow-lg">
          <p className="font-inter whitespace-nowrap text-lg">
            {currentUser ? `Hello, ${currentUser.username}!` : ``}
          </p>
          <button className="btn btn-ghost" type="button" onClick={logOut}>
            <Icon path={mdiLogout} className="h-7 w-7 text-base-content" />
          </button>
        </div>
      </details>
    </div>
  ) : (
    <div className={className}>
      <Link to={routes.login()}>
        <button className="btn btn-ghost" type="button" onClick={logOut}>
          <Icon path={mdiLogin} className="h-8 w-8 text-base-content" />
        </button>
      </Link>
    </div>
  )
}

export default NavbarAccountIcon
