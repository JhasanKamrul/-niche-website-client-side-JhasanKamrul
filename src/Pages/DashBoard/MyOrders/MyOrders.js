import { Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';

import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
    const { userEmail } = useParams();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/myorders/${userEmail}`)
            .then(res => res.json())
            .then(result => {
                setMyOrders(result)
            })
    }, [myOrders]);
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You Want to delete');
        if (proceed) {
            const url = `http://localhost:5000/dashoard/myorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCoutn > 0) {
                        alert('Deleted Sucessfully');
                        setMyOrders(data)
                    }
                })
        }
    }
    return (
        <Container>
            <Typography variant="h4" style={{ textAlign: 'center', color: '#03a9f4' }} gutterBottom component="div">
                ALL THE SELECTED ITEM'S
            </Typography>
            <Grid container spacing={2}>
                {
                    myOrders.map(pd =>
                        <Grid item xs={12} md={4} sx={{ p: 3 }}>
                            <Card sx={{ minWidth: 240, p: 5 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pd.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {pd.serviceName}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Consumer: {pd.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Adress :{pd.adress}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Phone: {pd.number}
                                    </Typography>
                                    <Typography variant="body2">
                                        Price: {pd.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => handleDelete(pd._id)} variant="contained" color="error">Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;