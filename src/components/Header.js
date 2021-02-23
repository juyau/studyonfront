import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../images/studyonLogo.png";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img style={{ width: "100px" }} src={logo}></img>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/course">
                <Nav.Link href="/course">
                  <i class="fas fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                  Courses
                </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link>
                  <i class="fas fa-user" aria-hidden="true"></i>&nbsp; Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
