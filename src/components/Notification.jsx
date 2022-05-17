import React, { useState } from "react";

export default function Notification({loggedIn, userData, notificationText, setNotificationText}) {
  if (loggedIn){
    setNotificationText(`Login State is ${loggedIn}. Welcome back, ${userData.type} ${userData.name}! Your ID is ${userData.id}`)
  }
  return (
    <div>
      <h1>{notificationText}</h1>
    </div>
  )
}