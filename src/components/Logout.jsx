import React, { useState } from "react";
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

export default function Logout({loggedIn, setLoggedIn, userData, setUserData, showLogin, setShowLogin}) {
  console.log('Logout CHECKS running...')
  console.log(`loggedIn now: ${loggedIn}`);
  console.log(`userData now:`);
  console.log(userData);
  console.log(`showLogin: ${showLogin}`);

  if(loggedIn){
    setLoggedIn(false);
    setUserData({
      id: null, 
      name:'', 
      type: ''
    });
    setShowLogin(true);
  } else {
    console.log("cannot log out because you're not logged in!");
  }

  return (
    <div>
      <br></br>
      <Container maxWidth ="md">
        <h3>Logout Successful!</h3>
        <br></br>
        <Alert severity="info">You need to log in to create, view, edit or delete requests!</Alert>
      </Container>
    </div>
  );
}