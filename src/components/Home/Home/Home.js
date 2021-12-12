import React from 'react';
import Header from '../Header/Header';
import ServesCenter from '../ServesCenter/ServesCenter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServesCenter></ServesCenter>
            <Services></Services>
        </div>
    );
};

export default Home;