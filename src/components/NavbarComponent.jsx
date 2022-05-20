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
import LoginPage from './LoginPage.jsx'
import RequestForm from './RequestForm.jsx';

export default function NavbarComponent({showLogin, setShowLogin, loggedIn, setLoggedIn, userData, setUserData}){
  return(  
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to = {"/"}>Partner Referral App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to = {"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to = {"/request"}>Submit New Request</Nav.Link>
              <Nav.Link as={Link} to = {"/contact"}>Contact</Nav.Link>
              <Nav.Link as={Link} to = {"/login"}>Login</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/about" element = {<About/>} />
        <Route path="/request" element = {<RequestForm loggedIn = {loggedIn} userData = {userData} />} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/login" element = {<LoginPage showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>} />
      </Routes>
    </Router>
  )
}