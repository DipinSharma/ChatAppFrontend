import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { apiClient } from '../../../shared/services/api-client';

export const Login = () => {
    const [message, setMessage] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const doLogin = async () => {
        const userInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            const response = await apiClient.post(process.env.REACT_APP_LOGIN, userInfo);
            setMessage(response.data.message);

            console.log("response is", response);
            console.log("user Info ", userInfo);
        }
        catch (err) {
            console.log("error is ", err);
        }
    }
    return (
        <Container>
            <Typography>Login</Typography>
            <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={emailRef} />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" inputRef={passwordRef} />
            <Button variant="contained" onClick={doLogin}>Register</Button>
            <p>{message}</p>
        </Container>
    )
}
