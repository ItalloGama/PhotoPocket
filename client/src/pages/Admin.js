import { React, useState } from 'react'
import { Form, Button, NavLink } from 'react-bootstrap'
import { UpdateUser } from '../services/UserServices'

const iState = {
  instagram: '',
  facebook: '',
  twitter: '',
  aboutMe: ''
}

const AdminForm = (props) => {
  const [adminFormValues, setAdminFormValues] = useState(iState)

  const updateUserInfo = async (e) => {
    e.preventDefault()
    await UpdateUser(props.user.id, adminFormValues)
    setAdminFormValues(iState)
    // props.history.push('/user')
  }

  const routeToUser = () => {
    props.history.push('/user')
  }

  const handleChange = (e) => {
    setAdminFormValues({ ...adminFormValues, [e.target.name]: e.target.value })
  }

  return (
    <div className="admin_form" className="page">
      <NavLink to="/user" onClick={routeToUser} className="back-user">
        Back to user page
      </NavLink>
      <Form className="bootstrap-form-contain" onSubmit={updateUserInfo}>
        <Form.Control
          className="field-decoration"
          type="text"
          name="instagram"
          placeholder="Instagram"
          value={adminFormValues.instagram}
          onChange={handleChange}
        />
        <br />
        <Form.Control
          className="field-decoration"
          type="text"
          name="facebook"
          placeholder="FaceBook"
          value={adminFormValues.facebook}
          onChange={handleChange}
        />
        <br />
        <Form.Control
          className="field-decoration"
          type="text"
          name="twitter"
          placeholder="Twitter"
          value={adminFormValues.twitter}
          onChange={handleChange}
        />
        <br />
        <Form.Control
          className="field-decoration"
          type="text"
          name="aboutMe"
          placeholder="About Me"
          value={adminFormValues.aboutMe}
          onChange={handleChange}
        />
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AdminForm
