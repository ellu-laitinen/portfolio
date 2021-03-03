import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import WorkOutlinedOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import DeveloperModeOulinedIcon from "@material-ui/icons/DeveloperModeOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";

import "../style.scss";

const Navigation = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <NavLink to="/" activeClassName="active" className="navigation">
          <Typography variant="h5">
            {" "}
            <FaceOutlinedIcon className="navIcon" />
            Me{" "}
          </Typography>
        </NavLink>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          <NavLink
            to="/experience"
            className="navigation"
            activeClassName="active"
          >
            {" "}
            <WorkOutlinedOutlinedIcon className="navIcon" />
            Education and work experience
          </NavLink>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          <NavLink
            to="/projects"
            activeClassName="active"
            className="navigation"
          >
            {" "}
            <DeveloperModeOulinedIcon className="navIcon" />
            Projects
          </NavLink>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          <NavLink
            to="/contact"
            activeClassName="active"
            className="navigation"
          >
            <CallOutlinedIcon className="navIcon" />
            Contact
          </NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Navigation;
