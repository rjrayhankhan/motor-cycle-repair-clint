import React from 'react';
import HeaderMain from './HeaderMain';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;