import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent.jsx';
// import NavSection from './components/NavSection.jsx';
import "bootstrap/js/src/collapse.js";
import ResponsiveAppBar from './components/NavbarComponent2.jsx';
// import DashboardSidebar from './components/DashboardSidebar.jsx';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: null, 
    name:'', 
    type: ''
  });

  return (
    <div>
      <NavbarComponent showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>

      <ResponsiveAppBar></ResponsiveAppBar>
    </div>
  );
}
