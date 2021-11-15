import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, img, description, price } = product;
    return (
        <Grid item xs={12} md={4}>
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
                    <Link to={`/singledetails/${_id}`}>
                        <Button color="primary" sx={{ textDecoration: "none" }}>
                            Purchase Now
                        </Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;