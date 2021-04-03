import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from "@material-ui/icons/Person";
import Navigation from "../../components/Navigation";

import "../../style.scss";

const useStyles = makeStyles(() => ({
  root: {
    margin: "2rem",
    height: "100vh",
  },
  link: {
    color: "red",
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  img: {
    border: "1px solid black",
    maxHeight: "15rem",
    borderRadius: 10,
    boxShadow: "0 0 3px",
  },
}));

const Home = () => {
  const styles = useStyles();

  return (
    <Grid container className="root" justify="space-around" spacing={2}>
      <Grid item xs={12} sm={3} md={2}>
        <Navigation />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Grid container spacing={2}>
          <Grid item>
            <Grid
              container
              /*     direction="row" */
              alignItems="center"
              spacing={2}
              justify="center"
            >
              <Grid item xs={12} sm={6}>
                <img
                  className={styles.img}
                  src="./images/picture.jpg"
                  alt="Elisabet Laitinen"
                ></img>
              </Grid>
              <Grid item xs={12} sm={6}>
                {" "}
                <Typography variant="h6">
                  Elisabet Laitinen, junior front-end developer with{" "}
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />{" "}
                  for UI/UX design!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Card>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography>
                    Hi! Welcome to my portfolio! My name is Elisabet, and I'm a
                    Full Stack Web development student in{" "}
                    <Typography
                      component="a"
                      variant="subtitle1"
                      href="https://www.bc.fi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Helsinki Business College
                    </Typography>
                    . I'm particularly interested in{" "}
                    <b>front-end development and UI/UX design.</b> <br />{" "}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {" "}
                    I'm currently doing my internship as an UI/UX designer /
                    front-end developer trainee at{" "}
                    <Typography
                      component="a"
                      variant="subtitle1"
                      href="https://eduix.fi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Eduix Oy{" "}
                    </Typography>
                    and will graduate in May 2021.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Programming languages, technologies and tools I have used:
                    <ul>
                      <li>HTML/CSS/SCSS</li>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                      <li>Material UI</li>
                      <li>Figma</li>
                      <li>Redux</li>
                      <li>NodeJS</li>
                      <li>Scrum method</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
