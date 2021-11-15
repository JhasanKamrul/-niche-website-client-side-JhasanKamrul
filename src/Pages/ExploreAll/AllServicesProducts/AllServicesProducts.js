import { Button, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Card, CardActions } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AllServicesProducts = ({ pd }) => {
    const { name, img, description, price, _id } = pd;
    return (
        <Grid item xs={8} md={4}>
            <Card sx={{ maxWidth: 350 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description?.slice(0, 150)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/singledetails/${_id}`} sx={{ textDecoration: 'none' }}>
                        <Button color="primary" >
                            Purchase Now
                        </Button></NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AllServicesProducts;