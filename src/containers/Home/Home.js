import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (

        <Container>
            <Col>
                <div className="home-header">
                    <img className="home-img" src="./images/picture.jpg" alt="Elisabet Laitinen"></img>
                    <h4 className="home-subtitle">Elisabet Laitinen, junior full stack web developer with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> for front-end development!</h4>
                </div>
                <div className="home-div">
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
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>NodeJS</li>
                        </ul>
                    On the <Link to="/about" className="link"> about </Link> page you can see my work experience and education.
                    <br />
                    On the <Link to="/projects" className="link">projects</Link> page you can see some of the projects I've made, links to the working apps and links to
                    the source codes as well.
                    <br />
                    </p>
                </div>
            </Col>

        </Container>

    );
}

export default Home;
