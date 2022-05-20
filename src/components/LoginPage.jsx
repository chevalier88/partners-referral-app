import React, { useState } from 'react';
import Notification from './Notification.jsx';
import LoginAppear from './LoginAppear.jsx'

export default function LoginPage({showLogin, setShowLogin, loggedIn, setLoggedIn, userData, setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [notificationText, setNotificationText] = useState("")

  return (
    <div>
      <Notification loggedIn = {loggedIn} loginError = {loginError} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />

      <LoginAppear showLogin = {showLogin} setShowLogin = {setShowLogin} email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} setLoginError = {setLoginError}/>
    </div>
  );
}