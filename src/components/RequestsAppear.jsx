import React, { useState, useEffect } from "react";
import RequestsForPartnerManagers from "./RequestsForPartnerManagers.jsx";
import RequestsForReferringEmployees from "./RequestsForReferringEmployees.jsx";
import Notification from "./Notification.jsx";
import axios from "axios";

export default function RequestsAppear({loggedIn, userData}) {

  const [notificationText, setNotificationText] = useState("")
  const [allRequests, setAllRequests] = useState([]);

  async function getAllRequests(){
    try {
      const results = await axios.get('/requests');
      const {data} = results;
      console.log(data);
      const newArray = [];
      for (let i = 0; i < data.length; i++) {
        newArray.push(data[i]);
      }
      setAllRequests(newArray);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllRequests();
  }, []);

  console.log(`loggedIn: ${loggedIn}`);
  console.log('printing userData...');
  console.log(userData.type);
  console.log(userData);

  let whatWillAppear;

  if (loggedIn) {
    if (userData.type === 'referring employee') {
      whatWillAppear = <RequestsForReferringEmployees allRequests = {allRequests} setAllRequests = {setAllRequests} />;
    } else {
      whatWillAppear = <RequestsForPartnerManagers allRequests = {allRequests} setAllRequests = {setAllRequests} />;
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

