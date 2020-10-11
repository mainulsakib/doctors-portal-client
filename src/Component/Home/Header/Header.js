import React from 'react';
import Navbar from '../../Shared/NavBar/Navbar';
import BusinessInfo from '../BusinessInfok/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div> 
    );
};

export default Header;