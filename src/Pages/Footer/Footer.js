import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', mt: 5, p: 3 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }} gutterBottom component="div">
                                About Us
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: 'white' }} gutterBottom component="div">
                                The new hero pieces bring instant fashion credibility.
                                Bright florals clash with camouflage prints
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant="h5" sx={{ color: 'white' }} gutterBottom component="div">
                                My Account
                            </Typography>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="subtitle1" sx={{ color: 'white' }} gutterBottom component="div">
                                    My Cart
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: 'white' }} gutterBottom component="div">
                                    Checkout
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: 'white' }} gutterBottom component="div">
                                    Terms & Condition
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: 'white' }} gutterBottom component="div">
                                    Return Policy
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant="h5" sx={{ color: 'white' }} gutterBottom component="div">
                                Get In Touch
                            </Typography>
                            <FacebookIcon sx={{ color: 'white', m: 2 }} />
                            <InstagramIcon sx={{ color: 'white', m: 2 }} />
                            <PinterestIcon sx={{ color: 'white', m: 2 }} />
                            <Typography variant="h6" sx={{ color: 'white' }} gutterBottom component="div">
                                <HomeIcon sx={{ mx: 2 }} />14 Tottenham Road, London, England.
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white' }} gutterBottom component="div">
                                <LocalPhoneIcon sx={{ mx: 2 }} />(102) 6666 8888
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white' }} gutterBottom component="div">
                                <MailOutlineIcon sx={{ mx: 2 }} /> info@demo.com
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Copyright © 2019 Bikerwala. All Right Reserved.
                    </Typography>
                </Grid>
            </Container>
        </Box>

    );
};

export default Footer;