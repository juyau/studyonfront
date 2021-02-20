import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PreviewCard from "../../components/PreviewCard";

const CourseGroup = ({ title, leftImg, topImg }) => {
  return (
    <Card className="mt-4" style={{ width: "100%", border: "none" }}>
      <Card.Body>
        <Row>
          <Col md={3}>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
          </Col>
          <Col md={{ span: 2, offset: 7 }} className="ml-auto">
            <Card.Link href="#">More...</Card.Link>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img src={leftImg} width="230" />
          </Col>
          <Col>
            <Row className="ml-auto">
              <img src={topImg} alt="" width="820" />
            </Row>
            <Row className="mt-3">
              <Col>
                <PreviewCard />
              </Col>
              <Col>
                <PreviewCard />
              </Col>
              <Col>
                <PreviewCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CourseGroup;
