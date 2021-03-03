import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <AppBar
      style={{
        bottom: "0",
        top: "auto",
        position: "static",
        backgroundColor: "rgba(128, 128, 128, 0.651)",
        padding: "8px",
        marginTop: "2rem",
      }}
    >
      <Grid
        /* className="footer" */ container
        justify="center"
        alignItems="center"
      >
        <Grid item>&copy; Elisabet Laitinen 2021 </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/elisabet-laitinen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://github.com/ellu-laitinen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="mailto:elisabet.laitinen@edu.bc.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </a>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
