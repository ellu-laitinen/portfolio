import React from "react";
import "./Contact.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <img className="cv" src="./images/CV_Elisabet_Laitinen.png" alt="cv" />
      </Grid>
      <Grid item>
        <Button>
          {" "}
          <Typography
            variant="subtitle2"
            component="a"
            href="/files/CV_Elisabet_Laitinen.pdf"
            download
          >
            {" "}
            Download the cv{" "}
            <FontAwesomeIcon className="download-icon" icon={faDownload} />
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
