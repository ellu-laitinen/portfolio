import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "./ProjectCard.css";

const ProjectCard = ({ name, desc, img, img2, alt, link, code }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={10}>
        <Card>
          <CardContent>
            <Typography variant="h4">{name}</Typography>

            <Typography>{desc}</Typography>
            {img2 ? (
              <Grid container>
                <Grid item xs={9}>
                  <img className="project-image" src={img} alt={alt} />
                </Grid>
                <Grid item xs={3}>
                  <img className="project-image" src={img2} alt={alt} />
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <img className="project-image" src={img} alt={alt} />
              </Grid>
            )}

            <Grid container>
              {link ? (
                <Grid item xs={12}>
                  <Typography
                    component="a"
                    variant="subtitle1"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to app
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <Typography
                  component="a"
                  variant="subtitle1"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to source code
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
