import React from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterForm = (props) => {
  return (
    <Form className="bootstrap-form-contain" onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          className="field-decoration"
          type="email"
          name="email"
          placeholder="example@example.com"
          value={props.newUsername}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          className="field-decoration"
          type="password"
          name="password"
          placeholder="enter your password"
          value={props.newUsername}
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
