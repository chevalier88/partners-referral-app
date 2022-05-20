import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import About from './About.jsx'
import Requests from './Requests.jsx';
import LoginPage from './LoginPage.jsx'
import RequestFormAppear from './RequestFormAppear.jsx';
import Logout from './Logout.jsx';

export default function NavbarComponent({showLogin, setShowLogin, loggedIn, setLoggedIn, userData, setUserData, allRequests, setAllRequests}){
  return(  
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >Partner Referral App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to = {"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to = {"/request"}>Submit New Request</Nav.Link>
              <Nav.Link as={Link} to = {"/requests"}>View All Requests</Nav.Link>
              <Nav.Link as={Link} to = {"/login"}>Login</Nav.Link>
              <Nav.Link as={Link} to = {"/logout"}>Logout</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/about" element = {<About/>} />
        <Route path="/request" element = {<RequestFormAppear loggedIn = {loggedIn} userData = {userData} allRequests = {allRequests} setAllRequests = {setAllRequests}/>} />
        <Route path="/requests" element = {<Requests/>} />
        <Route path="/login" element = {<LoginPage showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>} />
        <Route path="/logout" element = {<Logout showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} />} />
      </Routes>
    </Router>
  )
}