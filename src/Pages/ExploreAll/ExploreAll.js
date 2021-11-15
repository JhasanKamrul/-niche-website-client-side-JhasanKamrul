
import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { Grid, Typography } from '@material-ui/core';
import AllServicesProducts from './AllServicesProducts/AllServicesProducts';
import Footer from '../Footer/Footer';
import { Box } from '@mui/system';

const ExploreAll = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])
    return (
        <Box>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h4" style={{ textAlign: 'center', color: '#0276aa', fontWeight: '500' }} gutterBottom component="div">
                    Our Available Products
                </Typography>
                <Grid container spacing={2}>
                    {
                        allServices.map(pd => <AllServicesProducts
                            key={pd._id}
                            pd={pd}
                        ></AllServicesProducts>)
                    }
                </Grid>

            </Container>
            <Footer />
        </Box>
    );
};

export default ExploreAll;