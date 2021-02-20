import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Catalog.css";

const Catalog = () => {
  return (
    <div className="catalog">
      <ListGroup variant="flush">
        <ListGroup.Item>Java Backend</ListGroup.Item>
        <ListGroup.Item>Front End</ListGroup.Item>
        <ListGroup.Item>Big Data</ListGroup.Item>
        <ListGroup.Item>Database</ListGroup.Item>
        <ListGroup.Item>DevOps</ListGroup.Item>
        <ListGroup.Item>Testing</ListGroup.Item>
        <ListGroup.Item>Mage Courses</ListGroup.Item>
        <ListGroup.Item>Porta ac ac</ListGroup.Item>
        <ListGroup.Item>Porta ac ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Catalog;
