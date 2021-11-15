import { Container } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <div className="container banner">
                <div className="row">
                    <div className="banner-container">
                        <img src="https://i.ibb.co/rpFwXjk/1575411.webp" className="img-fluid" alt="Notebook" />
                        <div className="content">
                            <h4>The reason I’m drawn to it is – both the off-road racing and the motorcycles on the track – it takes a lot for me to quiet my brain and anything that requires 100% of my attention and focus I find very soothing and that is the closest I get to being content.</h4>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Banner;