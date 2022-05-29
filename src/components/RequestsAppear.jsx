import React, { useState } from "react";
import RequestsForPartnerManagers from "./RequestsForPartnerManagers.jsx";
import RequestsForReferringEmployees from "./RequestsForReferringEmployees.jsx";
import Notification from "./Notification.jsx";

export default function RequestsAppear({loggedIn, userData, allRequests, setAllRequests}) {

  const [notificationText, setNotificationText] = useState("")

  console.log(`loggedIn: ${loggedIn}`);
  console.log('printing userData...');
  console.log(userData.type);
  console.log(userData);

  let whatWillAppear;

  if (loggedIn) {
    if (userData.type === 'referring employee') {
      whatWillAppear = <RequestsForReferringEmployees allRequests={allRequests} setAllRequests = {setAllRequests} />;
    } else {
      whatWillAppear = <RequestsForPartnerManagers allRequests={allRequests} setAllRequests = {setAllRequests} />;
    }
  } else {
    whatWillAppear = < Notification loggedIn = {loggedIn} userData = {userData} notificationText = {notificationText} setNotificationText = {setNotificationText} />;
  };

  return (
    <div>
      <h1>All Requests</h1>
      {whatWillAppear}
    </div>
  );
}

