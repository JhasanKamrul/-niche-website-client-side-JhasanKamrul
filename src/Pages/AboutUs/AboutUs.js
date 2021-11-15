import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const AboutUs = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" style={{ textAlign: 'center', color: '#009688' }} gutterBottom component="div">
                        Royal Enfield Bikes Videos
                    </Typography>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/TnjVcsU_56Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Typography variant="h6" style={{ maxWidth: 500 }} gutterBottom component="div">
                        EXCLUSIVE: Royal Enfield Himalayan 650 | Here's The Real Inside Story | BikeWale
                    </Typography>
                    <Typography variant="body2" style={{ color: 'gray' }} gutterBottom>
                        The Royal Enfield Himalayan 650 has been a highly anticipated adventure tourer by enthusiasts and RE loyalists. But, is it under development? Will it be launched anytime soon? Get all the answers in this EXCLUSIVE video.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fuel Type</TableCell>
                                    <TableCell align="center">Upcoming Bikes</TableCell>
                                    <TableCell align="center">Popular Bikes</TableCell>
                                    <TableCell align="center">Most Expensive Bikes</TableCell>
                                    <TableCell align="center">Dealer Showroom</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Petrol
                                    </TableCell>
                                    <TableCell align="right"> Royal Enfiled scram 411</TableCell>
                                    <TableCell align="right">Classic 350,Bullet 350</TableCell>
                                    <TableCell align="right">Royal Enfield Continental GT</TableCell>
                                    <TableCell align="right">756 Cities</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutUs;