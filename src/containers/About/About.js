import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostCard from "./PostCard";
import education from "../../education";
import experience from "../../experience";
import Navigation from "../../components/Navigation";
import school_icon from "@material-ui/icons/School";
import work_icon from "@material-ui/icons/Work";
import HelmetMetaData from "../../Helmet/HelmetMetaData";

const About = () => {
  const schools = education;
  const work = experience;

  const schoolList = schools.map((p) => {
    return (
      <>
        <PostCard
          key={p.id}
          title={p.title}
          position={p.position}
          ward={p.ward}
          duration={p.duration}
          icon={school_icon}
        />
      </>
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
        icon={work_icon}
      />
    );
  });
  return (
    <Grid container className="root" justify="space-around" spacing={2}>
      <HelmetMetaData title="about me & education"></HelmetMetaData>
      <Grid item xs={12} sm={3} md={2}>
        <Navigation />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">Education </Typography>
            {schoolList}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Work Experience </Typography>
            {workList}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
