import React from "react";
import { Link } from "react-router-dom";
import TeachPlanList from "../config/teachPlan";
import { Accordion, Card, Button } from "react-bootstrap";

const TeachPlan2 = () => {
  const showSubPlan = (plan) => (
    <Accordion.Collapse eventKey={plan.id}>
      <>
        {/* {subPlan.map((childPlan) => (
          <Card.Body>{childPlan.pname}</Card.Body>
        ))} */}

        <Card.Body>
          {plan.children.map((childPlan) => (
            <Link to={`/course/teachplan/${childPlan.id}`}>
              <ul>{childPlan.pname}</ul>
            </Link>
          ))}
        </Card.Body>
      </>
    </Accordion.Collapse>
  );

  return (
    <Accordion style={{ width: "500px" }}>
      {TeachPlanList.map((plan) => (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={plan.id}>
              {plan.pname}
            </Accordion.Toggle>
          </Card.Header>
          {showSubPlan(plan)}
        </Card>
      ))}
    </Accordion>
  );
};

export default TeachPlan2;
