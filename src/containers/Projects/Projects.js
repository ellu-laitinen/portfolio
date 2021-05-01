import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../../_Contexts/ProjectContext";
import Navigation from "../../components/Navigation";

const Projects = () => {
  const { project, setProject } = useContext(ProjectContext);

  const projectsList = project.map((p) => {
    return (
      <ProjectCard
        key={p.id}
        name={p.name}
        desc={p.desc}
        img={p.img}
        img2={p.img2}
        alt={p.alt}
        link={p.link}
        code={p.code}
      />
    );
  });
  return (
    <Grid container className="root" justify="space-around" spacing={2}>
      <Grid item xs={12} sm={3} md={2}>
        <Navigation />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h3">Projects</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Here you can find some of the projects I've made at school.
                  All of my project codes can be found in{" "}
                  <Typography
                    component="a"
                    variant="subtitle1"
                    href="http://www.github.com/ellu-laitinen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub.
                  </Typography>
                  <b> This portfolio</b> was made with ReactJS and Material UI.
                  The source code can be found{" "}
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
          <Grid container>
            <Grid item lg={12} sm={10}>
              {projectsList}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
