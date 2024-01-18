import React from 'react';
import Mynav from './Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import './DefaultLayout.css';

const DefaultLayout = () => {
    return (
        <>
            <Mynav />
                <Outlet />
            <Footer/>
        </>
    );
};

export default DefaultLayout;