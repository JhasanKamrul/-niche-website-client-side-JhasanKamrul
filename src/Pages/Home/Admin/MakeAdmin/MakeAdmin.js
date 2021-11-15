import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    type="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully</Alert>
            }
        </Container>
    );
};

export default MakeAdmin;