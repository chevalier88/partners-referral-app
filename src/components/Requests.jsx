import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import axios from "axios";

export default function Requests() {
  const numbers = [1, 2, 3, 4, 5];
  const jsxListItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  console.log(jsxListItems);

  // Create a JSX element that uses the array of HTML list elements
  const myEl = (
    <div>
      <h1 className="hero-text">
        Hey <span className="warning">Wow!</span>
      </h1>
      <ul>{jsxListItems}</ul>
    </div>
);
  return (
    <div>
      <h1>All Requests</h1>
    </div>
  );
}