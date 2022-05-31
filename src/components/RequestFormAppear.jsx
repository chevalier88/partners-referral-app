import React, { useState } from "react";
import RequestForm from "./RequestForm.jsx";
import Notification from "./Notification.jsx";
import Container from '@mui/material/Container';

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
      whatWillAppear = 'Sorry, only non-Partner Manager Employees can Submit Requests for Partner Referrals!'
    }
  } else {
    whatWillAppear = < Notification loggedIn = {loggedIn} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />;
  };


  return (
    <div>
      <Container maxWidth = "md">
        <h3>Submit A New Request</h3>
        {whatWillAppear}
      </Container>
    </div>
  );
}