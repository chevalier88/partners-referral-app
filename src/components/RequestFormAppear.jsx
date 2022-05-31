import React, { useState } from "react";
import RequestForm from "./RequestForm.jsx";
import Notification from "./Notification.jsx";
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

export default function RequestFormAppear({loggedIn, userData}) {
  console.log(`loggedIn: ${loggedIn}`);
  console.log('printing userData...');
  console.log(userData.type);
  console.log(userData);

  let isPartnerManager = true;
  if (userData.type === 'referring employee'){
    isPartnerManager = false;
    console.log(`isPartnerManager: ${isPartnerManager}`);
  } else {
    console.log(`isPartnerManager: ${isPartnerManager}`);
  }
  
  const [notificationText, setNotificationText] = useState("")

  let whatWillAppear;

  if (loggedIn) {
    if (userData.type === 'referring employee') {
      whatWillAppear = <RequestForm userData = {userData} />
    } else {
      whatWillAppear = <Alert severity="warning">Sorry, only non-Partner Manager Employees can Submit Requests for Partner Referrals!</Alert>
      
    }
  } else {
    whatWillAppear = < Notification loggedIn = {loggedIn} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />;
  };


  return (
    <div>
      <br></br>
      <Container maxWidth = "sm">
        <h3>Submit A New Request</h3>
        <br></br>
        {whatWillAppear}
      </Container>
    </div>
  );
}