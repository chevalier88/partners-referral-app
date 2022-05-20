import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default function RequestForm({loggedIn, userData}) {
  console.log(`loggedIn: ${loggedIn}`);
  console.log('printing userData...');
  console.log(userData.type);

  let isPartnerManager = true;
  if (userData.type === 'referring employee'){
    isPartnerManager = false;
    console.log(`isPartnerManager: ${isPartnerManager}`);
  } else {
    console.log(`isPartnerManager: ${isPartnerManager}`);
  }

  return (
    <div>
      <h1>Request Form</h1>
      {!isPartnerManager && 
        <h1>Logged In as Referring Employee! You can submit a request here:</h1>
        
      }
    </div>
  );
}