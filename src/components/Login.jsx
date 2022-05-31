import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from '@mui/material/Container';
import axios from "axios";

export default function Login({email, setEmail, password, setPassword, setLoggedIn, userData, setUserData, setShowLogin, setLoginError}) {

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoginError(false);
    console.log(email)
    console.log(password)
    axios.post('/login', {
      email: email,
      password: password, 
    })
    .then((response)=>{
      console.log('printing response.data from login form submit...');
      console.log(Object.keys(response));
      if (response.data.id != null){
        setLoggedIn(true);
        const newUserData = {
          id: response.data.id, 
          name: response.data.name, 
          type: response.data.userType,
        };
        console.log(newUserData);
        setUserData(userData => ({...userData, ...newUserData}));
        setShowLogin(false);
      } else {
        setLoginError(true);
        console.log(response.status);
        console.log(response.statusText);
      } 
    })
    .catch((error)=> console.log(error));
  }

  return (
    <div className="Login">
      <Container maxWidth ="sm">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="sm-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="sm-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Button block size="sm-3" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}