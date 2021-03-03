import React from "react";
import "./Contact.css";
import { Button, Typography, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../../components/Navigation";

const Contact = () => {
  return (
    <Grid container className="root">
      <Grid item xs={2}>
        <Navigation />
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="column">
          <Grid item>
            <Typography>LinkedIn</Typography>
          </Grid>

          <Grid item>
            <Typography>Sähköposti</Typography>
          </Grid>

          <Grid item>
            <Typography>Github</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
