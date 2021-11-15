import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    // const { registerUser } = useAuth();
    const { registerUser } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your PassWord Didnt match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1, mb: 3 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 1, mb: 3 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="outlined" />

                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1, mb: 3 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1, mb: 3 }}
                            label="Re-type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" color="success">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login"
                        >
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>

                    {/* {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email && <Alert severity="success">User Created Successfully!</Alert>
                }
                {
                    authError && <Alert severity="error">{authError}</Alert>
                } */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/hcc8n1j/243.jpg" style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;