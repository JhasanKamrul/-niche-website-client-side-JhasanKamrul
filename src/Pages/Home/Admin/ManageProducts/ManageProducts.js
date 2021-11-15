import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [manageAllServices, setManageAllServices
    ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                setManageAllServices(data);
            })
    }, [manageAllServices])
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You Want to delete');
        if (proceed) {
            const url = `http://localhost:5000/manageallservices/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCoutn > 0) {
                        alert('Deleted Sucessfully');
                        setManageAllServices(data)
                    }
                })
        }
    }
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" style={{ textAlign: 'center', color: '#0276aa', fontWeight: '500' }} gutterBottom component="div">
                Our Available Products
            </Typography>
            <Grid container spacing={2}>
                {
                    manageAllServices.map(pd => <Grid item xs={12} md={6}>
                        <Card sx={{ maxWidth: 500 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pd.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pd.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Price: ${pd.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button color="primary" onClick={() => handleDelete(pd._id)}>
                                    Delete Item
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default ManageProducts;