import { useEffect, useRef } from 'react'

import {
  Form,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.username,
      email: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <h2 className="p-8 text-center text-2xl font-bold">Sign Up</h2>
            <Form onSubmit={onSubmit} className="rw-form-wrapper">
              <TextField
                name="username"
                placeholder="Username"
                className="rw-input mb-3 min-w-full"
                errorClassName="rw-input rw-input-error min-w-full"
                validation={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                }}
              />
              <FieldError name="username" className="rw-field-error" />

              <TextField
                name="email"
                placeholder="Email"
                className="rw-input mb-3 min-w-full"
                errorClassName="rw-input rw-input-error min-w-full"
                validation={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  pattern: {
                    value: new RegExp(
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
                    ),
                    message: 'Email is not valid',
                  },
                }}
                inputMode="email"
              />
              <FieldError name="email" className="rw-field-error pb-3" />

              <PasswordField
                name="password"
                placeholder="Password"
                className="rw-input min-w-full"
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

              <div className="rw-button-group">
                <Submit className="rw-button btn-primary">Sign Up</Submit>
              </div>
            </Form>
          </div>
          <div className="rw-login-link">
            <span className="text-base-content">Already have an account?</span>{' '}
            <Link to={routes.hub()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage