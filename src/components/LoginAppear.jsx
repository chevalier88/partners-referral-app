import React, { useState } from 'react';
import Login from './Login.jsx';

export default function LoginAppear({ showLogin, setShowLogin, email, setEmail, password, setPassword, setLoggedIn, userData, setUserData, setLoginError }) {

  return (
    <div>
        {showLogin && (
          <Login email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} setShowLogin = {setShowLogin} setLoginError = {setLoginError}/>
        )}
    </div>
  );
}