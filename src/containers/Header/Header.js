import React from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar className="navbar">
            <Navbar.Collapse>
                <Navigation></Navigation>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
