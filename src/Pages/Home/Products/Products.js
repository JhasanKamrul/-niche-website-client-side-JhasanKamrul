import { Container, Drawer, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-plateau-32116.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [])
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#0276aa', fontWeight: '500' }} gutterBottom component="div">
                Our Products
            </Typography>
            <Grid container spacing={2}>
                {
                    allProducts.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Grid>
        </Container>
    );
};

export default Products;