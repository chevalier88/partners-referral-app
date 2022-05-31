import React, { useState } from "react";

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
      <h1>Logout Succesfull!</h1>
    </div>
  );
}