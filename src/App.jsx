import React, { useState } from 'react';
import Login from './components/Login.jsx';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPartnerManager, setIsPartnerManager] = useState("");

  return (
    <div>
      <Login email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} isPartnerManager = {isPartnerManager} setIsPartnerManager = {setIsPartnerManager}/>
    </div>
  );
}
