import { React, useState } from 'react'
import { Form } from 'react-bootstrap'
const iState = {
    instagram: '',
    facebook: '',
    twitter: '',
    aboutMe: '',
  }
  
  const AdminForm = (props) => {
    const [adminFormValues, setAdminFormValues] = useState(iState)

    const handleChange = (e) => {
        setAdminFormValues({ ...adminFormValues, [e.target.name]: e.target.value })
    }

    return (
    <div className="admin_form">
        <Form.Control type="text" placeholder="Instagram" />
            <br />
        <Form.Control type="text" placeholder="FaceBook" />
            <br />
        <Form.Control type="text" placeholder="Twitter" />
            <br />
        <Form.Control type="text" placeholder="About Me" />
    </div>
    )
}

export default AdminForm
