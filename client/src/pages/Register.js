import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import RegisterForm from '../components/RegisterForm'
import logo from '../screenshot/logo2.png'

const iState = {
  newName: '',
  newEmail: '',
  newPassword: ''
}

const Register = (props) => {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const postNewUser = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.newName,
      email: formValues.newEmail,
      password: formValues.newPassword
    })
    // setFormValues(iState)
    // props.history.push('/login')
  }

  return (
    <div className="page">
      <img src={logo} className="register-logo" />
      <RegisterForm
        newName={formValues.newName}
        newEmail={formValues.newEmail}
        newPassword={formValues.newPassword}
        handleChange={handleChange}
        postNewUser={postNewUser}
      />
    </div>
  )
}

export default Register
