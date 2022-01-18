import React from "react";
import { Navbar, Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NaviBar() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Recipes Keeper</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/addRecipe">Add a Recipe</Nav.Link>
            </Nav>
            <Nav>

              <Nav.Link eventKey={2} onClick={refreshPage}>
                Reload Page
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );

}

export default NaviBar