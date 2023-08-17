import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { apiClient } from '../../../shared/services/api-client';

export const Register = () => {
    const [message, setMessage] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async () => {
        const userInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value,
        }
        try {
            const response = await apiClient.post(process.env.REACT_APP_REGISTER, userInfo);
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
        <Typography>Register</Typography>
            <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={emailRef} />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" inputRef={passwordRef} />
            <TextField id="outlined-basic" label="Name" variant="outlined" inputRef={nameRef} />
            <TextField id="outlined-basic" label="phone" variant="outlined" inputRef={phoneRef} />
            <Button variant="contained" onClick={doRegister}>Register</Button>
            <p>{message}</p>
        </Container>
    )
}
