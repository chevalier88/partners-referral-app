import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import About from './About.jsx'
import Contact from './Contact.jsx';

export default function NavbarComponent(){
  return(  
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to = {"/"}>Partner Referral App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to = {"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to = {"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to = {"/contact"}>Contact</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </Router>
  )
}