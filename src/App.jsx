import React, { useState } from 'react';
import "bootstrap/js/src/collapse.js";

// routes
import Router from './Router.js';
// theme
import ThemeProvider from './theme/index.js';
// components
import ScrollToTop from './style_components/ScrollToTop.js';

// import NavbarComponent from './components/NavbarComponent.jsx';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: null, 
    name:'', 
    type: ''
  });

  // return (
    // <div>
    //   <NavbarComponent showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>
    // </div>
  // );

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );

}
