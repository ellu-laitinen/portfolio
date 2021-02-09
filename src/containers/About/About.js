import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostCard from "./PostCard";
import education from "../../education";
import experience from "../../experience";

const About = () => {
  const schools = education;
  const work = experience;

  const schoolList = schools.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        position={p.position}
        ward={p.ward}
        duration={p.duration}
      />
    );
  });
  const workList = work.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        position={p.position}
        ward={p.ward}
        duration={p.duration}
      />
    );
  });
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Typography variant="h3">Education </Typography>
        {schoolList}
      </Grid>
      <Grid item>
        <Typography variant="h3">Work Experience </Typography>
        {workList}
      </Grid>
    </Grid>
  );
};

export default About;
