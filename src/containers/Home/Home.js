import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => ({
  root: {
    margin: "2rem",
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
    <div className={styles.root}>
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
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> for
                UI/UX design!
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
                  <b>front-end development and UI/UX design</b>, and I'm eager
                  to learn more about React and Redux! <br /> Our training
                  programme is a <b>no-nonsense approach </b> to coding and
                  we've been writing code and making small projects every day
                  since day one.
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
                    <li>Redux</li>
                    <li>NodeJS</li>
                    <li>UI/UX design</li>
                    <li>Scrum method</li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  On the{" "}
                  <Typography
                    variant="subtitle1"
                    component="a"
                    href="/experience"
                  >
                    experience
                  </Typography>{" "}
                  page you can see my work experience and education.
                  <br />
                  On the{" "}
                  <Typography
                    variant="subtitle1"
                    component="a"
                    href="/projects"
                  >
                    projects
                  </Typography>{" "}
                  page you can see some of the projects I've made, links to the
                  working apps and links to the source codes as well.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
