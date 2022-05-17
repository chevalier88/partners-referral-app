import React, { useState } from 'react';
import Login from './Login.jsx';

export default function LoginAppear({ showLogin, setShowLogin, email, setEmail, password, setPassword, loggedIn, setLoggedIn, userData, setUserData }) {

  return (
    <div>
      {showLogin && (
        <Login email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} setShowLogin = {setShowLogin}/>
      )}
    </div>
  );
}