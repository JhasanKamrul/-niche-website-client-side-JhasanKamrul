import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const AllReview = () => {
    const [allReview, setAllReview] = useState([]);
    const labels = {
        1: "Useless+",
        2: "Poor+",
        3: "Ok+",
        4: "Good+",
        5: "Excellent+"
    };
    useEffect(() => {
        fetch('http://localhost:5000/allfeedback')
            .then(res => res.json())
            .then(data => {
                setAllReview(data);
                console.log(data);
            })
    }, [])
    return (
        <Container>
            <Typography variant="h4" sx={{ color: '#009688', textAlign: 'center', marginTop: '20px', marginBottom: '20px' }} gutterBottom component="div">
                Our Customer's FeedBack
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        allReview?.map(review =>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ minWidth: 300, minHeight: 300 }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="h6" color="text.secondary" gutterBottom component="div">
                                                    {review.customerName}
                                                </Typography>
                                                <Typography variant="caption" display="block" gutterBottom>
                                                    {review.email}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    width: 200,
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <Rating
                                                    name="text-feedback"
                                                    value={review.rating}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.65 }} fontSize="inherit" />}
                                                />
                                                <Box sx={{ ml: 1 }}>{labels[review.rating]}</Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'gray', mt: 4 }} gutterBottom component="div">
                                                {review.feedback}
                                            </Typography>
                                        </Box>
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AllReview;