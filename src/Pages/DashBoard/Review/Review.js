import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { FeedbackSharp } from '@material-ui/icons';

const Review = () => {
    const [rating, setRating] = React.useState('');
    const [feedback, setFeedBacks] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...feedback };
        newLoginData[field] = value;
        console.log(newLoginData);
        setFeedBacks(newLoginData)
    }
    const handleformSubmit = e => {
        const feedbackInfo = {
            ...feedback
        }
        fetch('https://powerful-plateau-32116.herokuapp.com/addfeedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackInfo),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Booked Successfully');
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#ef9a9a' }} gutterBottom component="div">
                    WE APPRECIATE YOUR REVIEW!
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Your review will help us to improve our web hosting quality products, and customer services.
                </Typography>
            </Box>
            <Box >
                <form onSubmit={handleformSubmit}>
                    <TextField
                        sx={{ width: '85%', m: 1 }}
                        id="outlined-basic"
                        label="Customer's Name"
                        name="customerName"
                        variant="outlined"
                        onBlur={handleOnBlur}
                        helperText="Please select your name"
                    />
                    <TextField
                        sx={{ width: '85%', m: 1 }}
                        id="outlined-basic"
                        label="Customer's Email"
                        name="email"
                        variant="outlined"
                        onBlur={handleOnBlur}
                        helperText="Please select your email"
                    />
                    <TextField
                        sx={{ width: '85%', m: 1 }}
                        id="outlined-select-currency"
                        type="number"
                        label="Rate Us"
                        InputProps={{
                            inputProps: {
                                max: 5, min: 1
                            }
                        }}
                        name="rating"
                        onBlur={handleOnBlur}
                        helperText="Please select your rating"
                    >
                    </TextField>
                    <TextField
                        sx={{ width: '85%', m: 1 }}
                        id="outlined-multiline-static"
                        label="feedback"
                        name="feedback"
                        multiline
                        rows={4}
                        onBlur={handleOnBlur}
                    />
                    <Button sx={{ width: '85%', m: 1 }} variant="contained" type="submit">Submit Feedback</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Review;