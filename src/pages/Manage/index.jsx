import React, { useEffect } from "react";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideMenu from "./SideMenu";
import CourseManage from "./CourseManage/CourseManage";
import { Box } from "@material-ui/core";

const Manage = () => {
  return (
    <>
      <Header />
      {/* <SearchBar /> */}

      <main style={{ minHeight: "100%", marginTop: "2rem" }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3} style={{ width: "300px", height: "100%" }}>
              <SideMenu />
            </Grid>
            <Grid item xs={9} style={{}}>
              <CourseManage />
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
};

export default connect((state) => ({}), {})(Manage);
