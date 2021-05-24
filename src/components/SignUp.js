// eslint-disable-next-line
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { signUp } from '../actions/auth'
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';


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
            <h2>Sign Up for Picgram</h2>
            <Form onSubmit={handleSubmit}>
                <center>
                <Grid>
                    <Grid item container spacing={1} alignItems="flex-end">
                    <EmailIcon/>
                    Email:<input name="email" type="text" value={values.email} placeholder="Enter Email Here" onChange={handleEmail}/>
                    </Grid>
                    <Grid item container spacing={1} alignItems="flex-end">
                    <LockOpenIcon/>
                    Password:<input name="password" type="password" value={values.password} placeholder="Enter Passoword Here" onChange={handlePassword}/>
                    </Grid>
                    <button type="submit">Sign Up</button>
                </Grid>
                </center>
            </Form>
        </div>
    )
}

export default SignUp
