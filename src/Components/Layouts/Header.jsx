import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            className="text-decoration-none text-uppercase fw-bolder"
            to={"/"}
          >
            Logo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="text-white text-decoration-none"
                to={"/add-product"}
              >
                Add Product
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-white text-decoration-none"
                to={"/view-product"}
              > View Product
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-white text-decoration-none"
                to={"/delete-product"}
              > Delete Product
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
