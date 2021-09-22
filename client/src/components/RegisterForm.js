import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterForm = (props) => {
  return (
    <Form className="bootstrap-form-contain" onSubmit={props.postNewUser}>
      <Form.Group className="name-container" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="name"
          name="newName"
          placeholder="enter your name"
          value={props.newName}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group className="email-container" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="newEmail"
          placeholder="enter your email"
          value={props.newEmail}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group className="password-container" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          name="newPassword"
          placeholder="enter your password"
          value={props.newPassword}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-button">
        Submit
      </Button>
    </Form>
  )
}

export default RegisterForm
