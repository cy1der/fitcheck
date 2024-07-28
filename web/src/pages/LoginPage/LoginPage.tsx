import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <h2 className="p-8 text-center text-2xl font-bold">Log In</h2>

            <Form onSubmit={onSubmit} className="rw-form-wrapper">
              <TextField
                name="username"
                placeholder="Email"
                className="rw-input mb-3 min-w-full"
                errorClassName="rw-input rw-input-error min-w-full"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                }}
              />
              <FieldError name="username" className="rw-field-error" />

              <PasswordField
                name="password"
                className="rw-input mb-3 min-w-full"
                placeholder="Password"
                errorClassName="rw-input rw-input-error min-w-full"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                }}
              />
              <FieldError name="password" className="rw-field-error" />

              <div className="rw-forgot-link">
                <Link to={routes.forgotPassword()} className="rw-forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <div className="rw-button-group">
                <Submit className="rw-button btn-primary">Login</Submit>
              </div>
            </Form>
          </div>
        </div>
      </main>
      <div className="rw-login-link">
        <span className="text-base-content">Don&apos;t have an account?</span>{' '}
        <Link to={routes.signup()} className="rw-link">
          Sign up!
        </Link>
      </div>
      {/* </div> */}
      {/* </main> */}
    </>
  )
}

export default LoginPage
