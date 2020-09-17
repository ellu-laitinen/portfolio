import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="download-cv">
            <img className="cv" src="./images/CV_Elisabet_Laitinen.png" alt="cv" />
            <button className="download-btn"> <a href="/files/CV_Elisabet_Laitinen.pdf" download> Download the cv</a><FontAwesomeIcon className="download-icon" icon={faDownload} /></button>

        </div>
    );
}

export default Contact;
