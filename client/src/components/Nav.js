import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../screenshot/logo2.png'

export default function Navigation({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className="nav-user-options">
        <NavLink to={`/public/${user.id}`} className="public-page-font">
          Public Page
        </NavLink>
        <NavLink to="/admin" className="admin-font">
          Admin
        </NavLink>
        <NavLink onClick={handleLogOut} to="/" className="sign-out">
          Sign Out
        </NavLink>
      </div>
    )
  }
  // public profile options
  const publicOptions = (
    <Nav.Link href="/register" className="register-name">
      Register
    </Nav.Link>
  )
  return (
    <Navbar variant="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href={user && authenticated ? '/user' : '/'}>
          <img
            src={logo}
            width="120"
            height="30"
            margin-right="30"
            alt=""
            margin-top="20"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {authenticated && user ? authenticatedOptions : publicOptions}
        </Nav>
      </Container>
    </Navbar>
  )
}
