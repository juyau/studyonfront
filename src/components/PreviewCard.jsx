import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Card } from "react-bootstrap";

const PreviewCard = ({ course }) => {
  return (
    <Card style={{ minHeight: "312px" }}>
      <Link to={`/course/1234`}>
        <Card.Img variant="top" src="./images/widget-demo1.png" />
      </Link>

      <Card.Body>
        <Link to={`/course/1234`}>
          <h6 className="">ThinkPHP Blogging System Project</h6>
        </Link>

        <Card.Text>
          <Rating value="3.8" text="483 reviews" />
          <h6 className="text-primary pt-2">$19.99</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PreviewCard;
