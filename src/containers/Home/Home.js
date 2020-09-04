import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './Home.css'

const Home = () => {
    return (

        <Container>
            <Col>
                <img className="home-img" src="./images/picture.jpg" alt="Elisabet Laitinen"></img>
                <p>
                    Hi! Welcome to my portfolio!
                    My name is Elisabet, and I'm a Full Stack Web development student in Helsinki Business College. My main goal is to become a front-end developer,
                    and I'm enthusiastic about learning morea about React and Redux! Our trainig programme is a no-nonsense approach to coding and
                    we've been writing code and making small projects every day from day one.
                    <br />
                    <br />
                    On the "about" page you can see mu work experience and education.
                    <br />
                    On the "projects" page you can see some of the projects I've made, links to the working apps and links to
                    the source codes as well.
                    <br />
                    You can find my contact info on the "contact" page.
            </p>
            </Col>

        </Container>

    );
}

export default Home;
