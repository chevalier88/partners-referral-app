import React, { useState } from 'react';
import "bootstrap/js/src/collapse.js";
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx';

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
      <ResponsiveAppBar showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}></ResponsiveAppBar>
    </div>
  );
}
