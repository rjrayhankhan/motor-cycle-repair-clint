import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import ServesCenter from '../ServesCenter/ServesCenter';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServesCenter></ServesCenter>
            <Services></Services>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;