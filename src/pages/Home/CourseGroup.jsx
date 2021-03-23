import React from "react";

import PreviewCard from "../../components/PreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";

const CourseGroup = ({ title, leftImg, topImg }) => {
  return (
    <Container style={{ width: "100%", marginTop: "2rem" }}>
      <Grid container spacing={3}>
        <Grid md={12}>
          <Typography variant="h5" color="initial">
            {title}
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item md={3}>
            <img src={leftImg} width="100%" />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9}>
          <img src={topImg} alt="" width="100%" />
          <Grid
            container
            spacing={3}
            style={{ justifyContent: "center", marginTop: "8px" }}
          >
            <Grid item md={4}>
              <PreviewCard />
            </Grid>
            <Grid item md={4}>
              <PreviewCard />
            </Grid>
            <Grid item md={4}>
              <PreviewCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseGroup;
