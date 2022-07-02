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

  // const isPartnerManager = userData.type === 'referring employee' ? false : true;

  let isPartnerManager = true;
  if (userData.type === 'referring employee'){
    isPartnerManager = false;
    console.log(`isPartnerManager: ${isPartnerManager}`);
  } else {
    console.log(`isPartnerManager: ${isPartnerManager}`);
  }
  
  const [notificationText, setNotificationText] = useState("")

  if (!loggedIn) return (
  <>
    <Container>
      <Notification />
    </Container>
  </>
  )

  return (
    <div>
      <br></br>
      <Container maxWidth = "sm">
        <h3>Submit A New Request</h3>
        <br></br>
        {isPartnerManager && <Alert severity="warning">Sorry, only non-Partner Manager Employees can Submit Requests for Partner Referrals!</Alert>}
        {!isPartnerManager && <RequestForm userData = {userData} />}
      </Container>
    </div>
  );
}