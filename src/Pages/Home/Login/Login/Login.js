import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '500', color: '#00bcd4' }} gutterBottom>
                        Log In To Your Account
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '80%', m: 1, mb: 3 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="outlined" />
                        <TextField id="standard-basic"
                            sx={{ width: '80%', m: 1, mb: 3 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="outlined" />
                        <Button sx={{ width: '80%', m: 1 }} variant="contained" type="submit" color="success">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"
                        >
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                        {/* {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Logged In  Successfully!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        } */}
                    </form>
                    {/* <p>-------Or---------</p> */}
                    <button onClick={handleGoogleSignIn} className="login-with-google-btn mt-3">Sign In Using Google</button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/YkDV6T8/Vector-illustration-of-red-color-motorcycle-isolated-on-white-background.jpg" style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;