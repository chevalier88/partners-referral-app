import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent.jsx';

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
    </div>
  );
}
