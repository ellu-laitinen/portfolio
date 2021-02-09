import React from "react";
import { Link } from "react-router-dom";
/* import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"; */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
          justify="center"
        >
          {/*  <div className="home-header"> */}
          <Grid item xs={6}>
            <img
              /*  className="home-img" */
              style={{ height: "20rem" }}
              src="./images/picture.jpg"
              alt="Elisabet Laitinen"
            ></img>
          </Grid>
          <Grid item xs={6}>
            {" "}
            {/*  <h4 className="home-subtitle"> */}
            <Typography variant="h6">
              Elisabet Laitinen, junior full stack web developer with{" "}
              <FontAwesomeIcon icon={faHeart} className="heart-icon" /> for
              front-end development!
            </Typography>
            {/*  </h4> */}
          </Grid>
          {/*    </div> */}
        </Grid>
      </Grid>
      <Grid item>
        {/*     <div className="home-div"> */}
        <Card>
          <p>
            Hi! Welcome to my portfolio! My name is Elisabet, and I'm a Full
            Stack Web development student in{" "}
            <a
              className="link"
              href="https://www.bc.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Helsinki Business College
            </a>
            . I'm particularly interested in{" "}
            <b>front-end development and UI/UX design</b>, and I'm enthusiastic
            about learning more about React and Redux! <br /> Our training
            programme is a <b>no-nonsense approach </b> to coding and we've been
            writing code and making small projects every day since day one.
            <br />
            <br />
            Programming languages, technologies and tools I have used:
            <ul>
              <li>HTML/CSS/SCSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>NodeJS</li>
              <li>UI/UX design</li>
              <li>Scrum method</li>
            </ul>
            On the{" "}
            <Link to="/about" className="link">
              {" "}
              about{" "}
            </Link>{" "}
            page you can see my work experience and education.
            <br />
            On the{" "}
            <Link to="/projects" className="link">
              projects
            </Link>{" "}
            page you can see some of the projects I've made, links to the
            working apps and links to the source codes as well.
            <br />
          </p>
          {/*  </div> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
