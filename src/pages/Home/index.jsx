import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CategoryList from "../../components/CategoryList";
import Recommand from "./Recommand";
import CourseGroup from "./CourseGroup";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const Home = ({ category, loadCategoryList }) => {
  useEffect(() => loadCategoryList(), []);

  return (
    <>
      <Header />

      <SearchBar />

      <main>
        <Container>
          <Row>
            <Col>
              <CategoryList
                category={category}
                className="category"
              ></CategoryList>
            </Col>

            <Col xl={10} lg={9} md={8}>
              <Carousel style={{ height: "420px" }}>
                <Carousel.Item style={{ height: "420px" }}>
                  <img
                    className="d-block w-100"
                    src="./images/6.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "420px" }}>
                  <img
                    className="d-block w-100"
                    src="./images/4.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "420px" }}>
                  <img
                    className="d-block w-100"
                    src="./images/5.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Row>
            <Recommand />
          </Row>
          <Row>
            <CourseGroup
              title="Python Developer"
              leftImg="./images/widget-ind-left.png"
              topImg="./images/widget-ind-top.png"
            />
          </Row>
          <Row>
            <CourseGroup
              title="Java Backend Developer"
              leftImg="./images/widget-ind-left1.png"
              topImg="./images/widget-ind-top1.png"
            />
          </Row>
        </Container>
      </main>
      {console.log("hello")}

      <Footer></Footer>
    </>
  );
};

export default connect((state) => ({ category: state.category }), {
  loadCategoryList: actions.categoryActions.loadCategoryList,
})(Home);
