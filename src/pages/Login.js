import React, { useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';


export const action = async({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email, password);
    return null
}

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "" 
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginFormData(prev => ({...prev, [name]: value}))
    }

  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
        <Form method="post" className="login-form">
            <input 
                type="email"
                name="name"
                onChange={handleChange}
                placeholder="Email address"
                value={loginFormData.email}
            />
            <input 
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                value={loginFormData.password} 
            />
            <button>Log in</button>
        </Form>
    </div>
  )
}

export default Login;