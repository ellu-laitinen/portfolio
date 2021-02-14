import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../_Contexts/ThemeContext";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "grey",
  },
  link: {
    textDecoration: "none",
    color: "white",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();

  const { toggleTheme, activeTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    toggleTheme();
  };
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="flex-end">
        <Grid item>
          <Typography variant="h6">
            <Link className={classes.link} to="/">
              &lt;About
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <Link className={classes.link} to="/experience">
              &lt;Experience
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <Link className={classes.link} to="/projects">
              &lt;Projects
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <Link className={classes.link} to="/download_cv">
              &lt;Download CV (in Finnish)
            </Link>
          </Typography>
        </Grid>

        <Switch
          checked={activeTheme === "dark"}
          onChange={handleTheme}
          color="primary"
        />
      </Grid>
    </div>
  );
};

export default Navigation;
