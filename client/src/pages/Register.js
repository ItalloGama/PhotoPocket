import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import RegisterForm from '../components/RegisterForm'

const iState = {
  newName: '',
  newEmail: '',
  newPassword: ''
}

const Register = () => {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const postNewUser = (e) => {
    console.log('User Posted')
  }

  return (
    <div className="page">
      <RegisterForm
        newName={formValues.name}
        newEmail={formValues.email}
        newPassword={formValues.password}
        handleChange={handleChange}
        postNewUser={postNewUser}
      />
    </div>
  )
}

export default Register
