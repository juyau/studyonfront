import React from "react";
import TeachPlanList from "../config/teachPlan";
import { Accordion, Card, Button } from "react-bootstrap";

const TeachPlan = () => {
  const showSubPlan = (plan) => (
    <Accordion.Collapse eventKey={plan.id}>
      <>
        {/* {subPlan.map((childPlan) => (
          <Card.Body>{childPlan.pname}</Card.Body>
        ))} */}

        <Card.Body>
          {plan.children.map((childPlan) => (
            <Button>{childPlan.pname}</Button>
          ))}
        </Card.Body>
      </>
    </Accordion.Collapse>
  );

  return (
    <Accordion>
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

export default TeachPlan;
