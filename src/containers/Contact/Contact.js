import React from "react";
import "./Contact.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="download-cv">
      <img className="cv" src="./images/CV_Elisabet_Laitinen.png" alt="cv" />
      <Button>
        {" "}
        <a href="/files/CV_Elisabet_Laitinen.pdf" download>
          {" "}
          Download the cv
        </a>
        <FontAwesomeIcon className="download-icon" icon={faDownload} />
      </Button>
    </div>
  );
};

export default Contact;
