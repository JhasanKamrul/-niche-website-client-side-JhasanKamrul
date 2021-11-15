import React from 'react';
import Navigation from '../../../Pages/Shared/Navigation/Navigation';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Footer/Footer';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <AllReview />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;