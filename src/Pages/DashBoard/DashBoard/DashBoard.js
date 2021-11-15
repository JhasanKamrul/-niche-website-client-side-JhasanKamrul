import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Button, Fab } from '@material-ui/core';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../../Home/Admin/MakeAdmin/MakeAdmin';
import AddingProduct from '../../Home/Admin/AddingProduct/AddingProduct';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminRoute from '../../Home/Login/Login/AdminRoute/AdminRoute';
import ManageProducts from '../../Home/Admin/ManageProducts/ManageProducts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const { user, logOut, admin } = useAuth()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Toolbar />
            <Divider />
            {/* <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/`}>
                <Button color="inherit">DashBoard</Button>
            </NavLink> */}
            {
                !admin && <Box sx={{ textAlign: 'center' }}>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/payment`}>
                        <Button color="inherit"><PaymentsIcon /> Paymnet</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/myorders/${user.email}`}>
                        <Button color="inherit"><BookmarkBorderIcon /> My Orders</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/review`}>
                        <Button color="inherit"><RateReviewIcon /> Review</Button>
                    </NavLink>
                    <br />
                    <Button color="inherit" onClick={logOut}><LogoutIcon /> Log Out</Button>
                </Box>
            }
            {
                admin && <Box sx={{ textAlign: 'center' }}>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/makeAdmin`}>
                        <Button color="inherit"><AdminPanelSettingsIcon />  Make Admin</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/addproduct`}>
                        <Button color="inherit"><ProductionQuantityLimitsIcon />Add Product</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/manageProducts`}>
                        <Button color="inherit"><ManageAccountsIcon />Manage Product</Button>
                    </NavLink>
                    <Button color="blue" onClick={logOut}><LogoutIcon /> Log Out</Button>
                </Box>
            }
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'black'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {/* <Route exact path={path}>
                        <DashBoard />
                    </Route> */}
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/myorders/:userEmail`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddingProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard;