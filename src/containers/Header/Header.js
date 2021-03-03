import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";

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
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography variant="h3">Portfolio</Typography>
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
    </div>
  );
};

export default Navigation;
