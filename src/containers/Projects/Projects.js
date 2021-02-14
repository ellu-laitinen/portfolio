import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import projectsdb from "../../projectsdb";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = projectsdb;

  const projectsList = projects.map((p) => {
    return (
      <ProjectCard
        key={p.id}
        name={p.name}
        desc={p.desc}
        img={p.img}
        alt={p.alt}
        link={p.link}
        code={p.code}
      />
    );
  });
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h3">Projects</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Here you can find some of the projects I've made at school. All of
              my project codes can be found in{" "}
              <Typography
                component="a"
                variant="subtitle1"
                href="http://www.github.com/ellu-laitinen"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub.
              </Typography>
              This portfolio was made with ReactJS and Material UI. The source
              code can be found{" "}
              <Typography
                component="a"
                variant="subtitle1"
                href="http://www.github.com/ellu-laitinen/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item lg={12} sm={10}>
          {projectsList}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
