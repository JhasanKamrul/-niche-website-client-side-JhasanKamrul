import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "black", mb: 4 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        bikerWala
                    </Typography>

                    <NavLink to="/explore" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit" sx={{ marginRight: '10px' }}>Explore</Button>
                    </NavLink>
                    {
                        !user.email && <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></NavLink>
                    }
                    {

                        user.email && <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">DashBoard</Button>
                            </NavLink>
                            <Button color="inherit" onClick={logOut}>Logout</Button>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;