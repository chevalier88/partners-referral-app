import React, { useState } from 'react';
import Notification from './components/Notification.jsx';
import LoginAppear from './components/LoginAppear.jsx'

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

  const [notificationText, setNotificationText] = useState("")

  return (
    <div>
      <Notification loggedIn = {loggedIn} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />

      <LoginAppear showLogin = {showLogin} setShowLogin = {setShowLogin} email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>
    </div>
  );
}
