import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import WorkOutlinedOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import DeveloperModeOulinedIcon from "@material-ui/icons/DeveloperModeOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../style.scss";

const Navigation = () => {
  return (
    <div className="navBg">
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <NavLink to="/" activeClassName="active" className="navigation">
            <Typography variant="h5">
              {" "}
              <FaceOutlinedIcon color="primary" />
              Me{" "}
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/experience"
            className="navigation"
            activeClassName="active"
          >
            {" "}
            <Typography variant="h5">
              {" "}
              <WorkOutlinedOutlinedIcon color="primary" />
              Education and work experience{" "}
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/projects"
            activeClassName="active"
            className="navigation"
          >
            <Typography variant="h5">
              {" "}
              <DeveloperModeOulinedIcon color="primary" />
              Projects{" "}
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Link href="mailto: elisabet.laitinen@edu.bc.fi">
                {" "}
                <MailOutlineIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.github.com/ellu-laitinen"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <GitHubIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/elisabet-laitinen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
