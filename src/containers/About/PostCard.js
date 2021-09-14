import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Icon } from "@material-ui/core";

const PostCard = ({ title, position, ward, duration, icon }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              {" "}
              <Icon component={icon}></Icon> {title}
            </Typography>
            <Typography component="p">
              <Typography variant="subtitle2">{duration}</Typography>
            </Typography>
            <Typography>{position}</Typography>

            <Typography>{ward}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostCard;
