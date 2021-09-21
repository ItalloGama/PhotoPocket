import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { SignInUser } from '../services/Auth'

export default function SignIn(props) {
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {

}


return (
    <div className="page">
        <LoginForm
            newEmail={formValues.email}
            newPassword={formValues.password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        </div>
    )


}