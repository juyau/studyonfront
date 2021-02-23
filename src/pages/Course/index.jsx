import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Breadcrumb,
} from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";

const Course = ({ name, description, mt, st, company, pic }) => {
  return (
    <>
      <Header></Header>

      <main>
        <Jumbotron
          fluid
          style={{ backgroundColor: "black", color: "white", padding: "32px" }}
        >
          <Container>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href={`/${mt}/`}>{mt}</Breadcrumb.Item>
              <Breadcrumb.Item href={`/${mt}/${st}`}> {st}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
              <Col md={8}>
                <h3>{name}</h3>
                <p>{description}</p>
                <Rating value="4.6" text="483 reviews" />
                <small>Created by: {company} </small>
              </Col>
              <Col md={4}>
                <img width="350px" src="../../images/3.jpg" alt="" />
              </Col>
            </Row>
            <Row>
              <Button variant="primary">Add to Card</Button>
              <Button variant="outline-primary">Buy Now</Button>
            </Row>
          </Container>
        </Jumbotron>
      </main>

      <Footer></Footer>
    </>
  );
};

Course.defaultProps = {
  id: 1234,
  name: "Java Microservices with SpringCloud beginnger course",
  user: "New learner with 0 experience.",
  grade: "Intermediat",
  mt: "Java",
  st: "Microservice",
  studymode: "online",
  teachmode: "realtime broadcast",
  description:
    "a comprehansive project base course that teach you everything about SpringCloud and SpringBoot microservices.",
  timestamp: "2021-01-29",
  company: "Miles Guo",
  charge: "Paypal",
  valid: true,
  whatsapp: "+6100660066",
  price: 19.99,
  price_old: 100.0,
  expires: "2025-01-29",
  pic: "../../images/01.jpg",
  teachplan: "Chapter1 Java basics",
};

export default Course;
