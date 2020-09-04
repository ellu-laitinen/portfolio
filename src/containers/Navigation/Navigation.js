import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <Nav className="justify-content-end" style={{ width: "85%" }}>
            <Nav.Item>
                <LinkContainer className="nav-link" to="/" exact>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer className="nav-link" to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer className="nav-link" to="/projects">
                    <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer className="nav-link" to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav.Item>


        </Nav>
    );
}

export default Navigation;
