import React, { useState } from "react";
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

export default function Notification({loggedIn, loginError, userData, notificationText, setNotificationText}) {

  let AlertToShow;

  if (loggedIn){
    console.log(`loggedIn: ${loggedIn}`);
    setNotificationText(`Login State is ${loggedIn}. Welcome back, ${userData.type} ${userData.name}! Your ID is ${userData.id}`);
    console.log("userData state now:");
    console.log(userData);
    console.log(loggedIn);
    AlertToShow = <Alert severity="success">{notificationText}</Alert>
  }
  if (loginError){
    console.log(`loginError: ${loginError}`);
    setNotificationText('Login Error detected! Please try logging in again...');
    AlertToShow = <Alert severity="error">{notificationText}</Alert>
  }
  if (loggedIn === false){
    setNotificationText(`Please login!`);
    AlertToShow = <Alert severity="warning">{notificationText}</Alert>
  }

  return (
    <div>
      <br></br>
      <Container maxWidth ="sm">
        {AlertToShow}
      </Container>
      <br></br>
    </div>
  )
};