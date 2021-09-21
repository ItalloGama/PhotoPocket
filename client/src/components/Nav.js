import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Navigation({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <NavLink onClick={handleLogOut} to="/">
        Sign Out
      </NavLink>
    )
  }
  const publicOptions = <Nav.Link href="/register">Register</Nav.Link>
  return (
    <Navbar variant="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href={`/`}>PhotoPocket</Navbar.Brand>
        <Nav className="me-auto">
          {authenticated && user ? authenticatedOptions : publicOptions}
        </Nav>
      </Container>
    </Navbar>
  )
}
