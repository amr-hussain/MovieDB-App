import React from "react";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar({searchFunction}) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Movie App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Movies</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav>
        <Form inline>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search only works in dashboard"
              className=" mr-sm-2"
              onChange={(event) => searchFunction(event.target.value)}
            />
          </Col>
          {/* <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col> */}

      </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;