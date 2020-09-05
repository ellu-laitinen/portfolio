import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import './Navigation.css'

const Navigation = () => {
    return (
        <Nav className="justify-content-end" style={{ width: "85%" }}>
            <Nav.Item>
                <LinkContainer style={{ color: "white" }} to="/" exact>
                    <Nav.Link>&lt;Home/&gt;</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer style={{ color: "white" }} to="/about">
                    <Nav.Link>&lt;About/&gt;</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer style={{ color: "white" }} to="/projects">
                    <Nav.Link>&lt;Projects/&gt;</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            {/*    <Nav.Item>
                <LinkContainer className="nav-link" to="/contact">
                    <Nav.Link>&lt;Contact/&gt;</Nav.Link>
                </LinkContainer>
            </Nav.Item> */}


        </Nav>
    );
}

export default Navigation;
