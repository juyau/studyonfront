import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/SimpleCarousel";
import CategoryList from "../../components/CategoryList";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Recommand from "./Recommand";
import CourseGroup from "./CourseGroup";

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  useEffect(() => dispatch(actions.categoryActions.getCategoryList()), []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Container style={{ marginTop: "2rem", flex: "1 0 auto" }}>
        <Grid
          container
          spacing={1}
          style={{ marginLeft: "2rem", marginBottom: "3rem" }}
        >
          <Hidden smDown>
            <Grid item xs={3}>
              <CategoryList category={category} />
            </Grid>
          </Hidden>
          <Grid item xs={9} style={{ minWidth: "520px" }}>
            <Carousel width="780px" />
          </Grid>
        </Grid>
      </Container>
      <Container style={{ marginTop: "2rem" }}>
        <Recommand />
      </Container>

      <Container>
        <CourseGroup
          title="Python Developer"
          leftImg="./images/widget-ind-left.png"
          topImg="./images/widget-ind-top.png"
        />
      </Container>
      <Container>
        <CourseGroup
          title="Java Backend Developer"
          leftImg="./images/widget-ind-left1.png"
          topImg="./images/widget-ind-top1.png"
        />
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;
