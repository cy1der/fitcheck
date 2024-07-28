/* eslint-disable jsx-a11y/label-has-associated-control */
import { mdiHanger, mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'

import { Link, routes } from '@redwoodjs/router'

import NavbarAccountIcon from 'src/components/NavbarAccountIcon/NavbarAccountIcon'
import ThemeToggle from 'src/components/ThemeToggle/ThemeToggle'

type NavBarLayoutProps = {
  children?: React.ReactNode
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="justify-start space-x-3">
          <Icon path={mdiHanger} className="ml-3 h-10 text-logo" />
          <Link
            to={routes.home()}
            className="btn btn-ghost items-center hover:shadow-lg"
          >
            <p className="font-inter text-xl normal-case tracking-tight">
              Fit Check
            </p>
          </Link>
        </div>
        <div className="ml-auto justify-end space-x-3">
          <ThemeToggle />
          <NavbarAccountIcon mobile={false} className="hidden lg:block" />
          <div className="lg:hidden">
            <input
              id="mobile-menu-drawer"
              type="checkbox"
              className="drawer-toggle"
              defaultChecked={false}
            />
            <div className="drawer-content">
              <label
                htmlFor="mobile-menu-drawer"
                className="btn btn-ghost drawer-button hover:shadow-lg"
              >
                <Icon path={mdiMenu} className="h-8 w-8" />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="mobile-menu-drawer" className="drawer-overlay">
                <br />
              </label>
              <ul className="min-h-full w-80 space-y-3 bg-base-100 p-3 text-base-content shadow-lg">
                <li>
                  <div className="flex justify-center space-x-3">
                    <Icon path={mdiHanger} className="ml-3 h-10 text-logo" />
                    <Link
                      to={routes.home()}
                      className="btn btn-ghost items-center hover:shadow-lg"
                    >
                      <p className="font-inter text-xl normal-case tracking-tight">
                        Fit Check
                      </p>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main className="m-3">{children}</main>
    </>
  )
}

export default NavBarLayout
