import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import PreviewCard from "../../components/PreviewCard";

const Recommand = () => {
  return (
    <Card className="mt-4" style={{ width: "100%", border: "none" }}>
      <Card.Body>
        <Row>
          <Col md={3}>
            <Card.Subtitle className="mb-2 text-muted">Recommand</Card.Subtitle>
          </Col>
          <Col md={{ span: 2, offset: 7 }} className="ml-auto">
            <Card.Link href="#">More...</Card.Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PreviewCard />
          </Col>
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
      </Card.Body>
    </Card>
  );
};

export default Recommand;
