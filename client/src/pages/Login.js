import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { SignInUser } from '../services/Auth'
import { Redirect } from 'react-router'
import logo from '../screenshot/logo2.png'

export default function Login(props) {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    console.log(payload)
    props.history.push('/user')
    // return <Redirect to="/user" />
  }

  return (
    <div className="page">
      <img src={logo} className="register-logo" />
      <LoginForm
        newEmail={formValues.email}
        newPassword={formValues.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
