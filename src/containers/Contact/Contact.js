import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

/* import cv from '../../../public/files/' */

const Contact = () => {
    return (
        <div className="download-cv">
            <img className="cv" src="./images/CV_Elisabet_Laitinen.png" alt="cv" />
            <button className="download-btn"> <a href="/files/CV_Elisabet_Laitinen.pdf" download> Download my cv</a></button>

        </div>
    );
}

export default Contact;
