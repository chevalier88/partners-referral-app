import React, { useState } from "react";
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const getSeverity = (isLoggedIn, loginError) => {
  if (!loggedIn && !loginError) return 'warning'
  if (loginError) return 'error'
  if (isLoggedIn) return 'success'
}

export default function Notification({loggedIn, loginError, userData, notificationText, setNotificationText}) {
  const alertSeverity = getSeverity(loggedIn, loginError);

  return (
    <div>
      <br></br>
      <Container maxWidth ="sm">
        <Alert severity={alertSeverity}>{notificationText}</Alert>
      </Container>
      <br></br>
    </div>
  )
};