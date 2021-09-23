import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest // allows us to provide the remaining props defined to the route below.
}) {
  // Accepts user and authenticated as props to check if the current user is authorized

  // Component is the component we want to render if the user is logged in and authenticated
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? (
          <Component {...props} /> // Render our chosen component if a user exists and they are authenticated
        ) : (
          <Redirect to="/" /> // Otherwise, use the Redirect component to return the user to the sign in screen
        )
      }
    />
  )
}
