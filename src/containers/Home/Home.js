import React from 'react';
import { Link } from 'react-router-dom'
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
                    My name is Elisabet, and I'm a Full Stack Web development student in Helsinki Business College. My main goal is to become a <b>front-end developer</b>,
                    and I'm enthusiastic about learning more about React and Redux! Our trainig programme is a <b>no-nonsense approach </b> to coding and
                    we've been writing code and making small projects every day from day one.
                    <br />
                    <br />
                    Programming languages, techologies and tools I have used:
                    <ul>
                        <li>HTML/CSS/SASS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                    </ul>
                    On the <Link to="/about" className="link"> about </Link> page you can see my work experience and education.
                    <br />
                    On the <Link to="/projects" className="link">projects</Link> page you can see some of the projects I've made, links to the working apps and links to
                    the source codes as well.
                    <br />
                    You can find my contact info on the <Link to="/contact" className="link">contact</Link> page.
            </p>
            </Col>

        </Container>

    );
}

export default Home;
