import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Catalog from "./Catalog";
import Recommand from "./Recommand";
import CourseGroup from "./CourseGroup";
import {
  Carousel,
  Container,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header></Header>

      <main>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for courses"
                  aria-label="Search for courses"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 2 }}>
              <Catalog></Catalog>
            </Col>
            <Col md={{ span: 10 }}>
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

      <Footer></Footer>
    </>
  );
};

export default Home;
