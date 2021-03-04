import React, { useContext } from "react";

import { Grid, Link } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../../_Contexts/ThemeContext";
import "../../style.scss";

/* const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(201, 251, 222)",
  },
  link: {
    textDecoration: "none",
    color: "white",

    "&:hover": {
      textDecoration: "underline",
    },
  },
})); */

const Navigation = () => {
  /*   const classes = useStyles(); */

  const { toggleTheme, activeTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    toggleTheme();
  };
  return (
    <AppBar /*  className={classes.root}  */ position="static" /* "header" */>
      <Grid container alignItems="center" justify="space-between" spacing={2}>
        <Grid item>
          <Typography variant="h4">
            <FontAwesomeIcon
              icon={faSeedling}
              style={{ color: "green", marginRight: "1rem" }}
            />
            Ellun portfolio
          </Typography>
        </Grid>

        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <WbSunnyRoundedIcon />
            </Grid>
            <Grid item>
              <Switch
                checked={activeTheme === "dark"}
                onChange={handleTheme}
                color="primary"
              />
            </Grid>
            <Grid item>
              <NightsStayRoundedIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navigation;
