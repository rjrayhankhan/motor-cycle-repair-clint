import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import ServesCenter from '../ServesCenter/ServesCenter';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServesCenter></ServesCenter>
            <Services></Services>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;