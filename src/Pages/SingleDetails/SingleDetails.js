import { Button, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import { Card, CardActions, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleDetails = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [bookService, setBookService] = useState({});
    const [consumerInfo, setConsumerInfo] = useState({});
    useEffect(() => {
        fetch(`https://powerful-plateau-32116.herokuapp.com/singledetails/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookService(data))
    }, [bookService])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...consumerInfo };
        newLoginData[field] = value;
        console.log(newLoginData);
        setConsumerInfo(newLoginData)
    }
    const handleLoginSubmit = e => {
        const bookingInfo = {
            ...consumerInfo,
            serviceName: bookService.name,
            price: bookService.price,
            email: user.email,
            image: bookService.img
        }
        console.log(bookingInfo);
        fetch('https://powerful-plateau-32116.herokuapp.com/addNewConsumer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Booked Successfully');

                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <Paper elevation={3}>
                        <Card sx={{ maxWidth: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={bookService?.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {bookService.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Price: ${bookService.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {bookService.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" style={{ textAlign: 'center' }} gutterBottom component="div" >
                        Please Give Us Below Information To Proceed
                    </Typography>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '80%', m: 2 }}
                                id="outlined-basic"
                                label="name"
                                name="name"
                                defaultValue={user?.displayName}
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '80%', m: 2 }}
                                id="outlined-basic"
                                label="E-mail"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                disabled
                                variant="outlined" />
                            <TextField
                                sx={{ width: '80%', m: 2 }}
                                id="outlined-basic"
                                label="Adress"
                                name="adress"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '80%', m: 2 }}
                                id="outlined-basic"
                                label="Phone Number"
                                name="number"
                                type="number"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <Button sx={{ width: '80%', m: 1 }} variant="contained" type="submit">Submit For Purchase</Button>
                        </form>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
};

export default SingleDetails;