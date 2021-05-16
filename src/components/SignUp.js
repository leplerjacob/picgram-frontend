import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import { signUp } from "../actions/auth"



function SignUp() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEmail = e => {
        
        setValues((values) => ({
            ...values,
            email: e.target.value
        })) 
    }

    const handlePassword = e => {
        
        setValues((values) => ({
            ...values,
            password: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if(values.email && values.password) {
            setValid(true)
            signUp(values)
        }
        setSubmitted(true)
    }



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                Email<input name="email" type="text" value={values.email} onChange={handleEmail}/>
                Password<input name="password" type="password" value={values.password} onChange={handlePassword}/>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default SignUp
