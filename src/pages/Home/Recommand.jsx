import React from "react";

import PreviewCard from "../../components/PreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Recommand = () => {
  return (
    <Container style={{ width: "100%", border: "none" }}>
      <Grid container spacing={2}>
        <Grid md={12}>
          <Typography variant="h5" color="initial">
            Recommanded
          </Typography>
        </Grid>
        <Grid container item spacing={3} style={{ justifyContent: "center" }}>
          <Grid item md={3}>
            <PreviewCard />
          </Grid>
          <Grid item md={3}>
            <PreviewCard />
          </Grid>
          <Grid item md={3}>
            <PreviewCard />
          </Grid>
          <Grid item md={3}>
            <PreviewCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recommand;
