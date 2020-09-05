import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            &copy; Elisabet Laitinen 2020 <a href="https://www.linkedin.com/in/elisabet-laitinen/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href="https://github.com/ellu-laitinen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            <a href="mailto:elisabet.laitinen@edu.bc.fi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
        </div>
    );
}

export default Footer;
