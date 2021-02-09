import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "./ProjectCard.css";

const ProjectCard = ({ name, desc, img, alt, link, code }) => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item lg={6}>
        <Card>
          <CardContent>
            <Typography variant="h4">{name}</Typography>

            <Typography>{desc}</Typography>
            <img className="project-image" src={img} alt={alt} />

            <Typography
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to app
            </Typography>
            <Typography
              component="a"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to source code
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
