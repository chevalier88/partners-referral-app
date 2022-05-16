import React, { useState } from 'react';
import Login from './components/Login.jsx';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* <FormShower bills={bills} setBills={setBills} /> */}
      <Login email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword}/>
    </div>
  );
}
