import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Form,
} from "react-bootstrap";

const SearchBar = () => {
  const handleSearchClick = () => {
    alert("Search Click!");
  };
  return (
    <Row className="my-2">
      <Col md={{ span: 5, offset: 4 }}>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search for sourses"
            />

            <InputGroup.Append>
              <InputGroup.Text
                style={{ cursor: "pointer" }}
                onClick={handleSearchClick}
                id="inputGroup-sizing-default"
              >
                Search
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Col>
    </Row>
  );
};

export default SearchBar;
