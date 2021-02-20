import React from "react";
import { Card } from "react-bootstrap";

const PreviewCard = () => {
  return (
    <Card style={{}}>
      <Card.Img variant="top" src="./images/widget-demo1.png" />
      <Card.Body>
        <small className="text-primary">ThinkPHP Blogging System Project</small>
        <Card.Text>
          <small className="text-secondary">1730 Learning</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PreviewCard;
