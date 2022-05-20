import React, { useState } from 'react';
import Notification from './components/Notification.jsx';
import LoginAppear from './components/LoginAppear.jsx'
import NavbarComponent from './components/NavbarComponent.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: null, 
    name:'', 
    type: ''
  });

  const [loginError, setLoginError] = useState(false);

  const [notificationText, setNotificationText] = useState("")

  return (
    <div>
      <NavbarComponent/>
      <Notification loggedIn = {loggedIn} loginError = {loginError} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />

      <LoginAppear showLogin = {showLogin} setShowLogin = {setShowLogin} email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} setLoginError = {setLoginError}/>
    </div>
  );
}
