import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";

export default function RequestForm() {
  const [serviceRequested, setServiceRequested] = useState("");
  const [regionRequested, setRegionRequested] = useState([]);
  const [entitiesStatus, setEntitiesStatus] = useState("");
  const [employeeNumbers, setEmployeeNumbers] = useState(0);
  const [comments, setComments] = useState("");

  function handleSubmit(event) {
    console.log('submitting...');
  }
  return (
    <div>
      <h2>Logged In as Referring Employee! You can submit a request here:</h2>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group size="sm-3" controlId="serviceRequested">
                <Form.Label>Service Requested:</Form.Label>
                <Form.Control
                  autoFocus
                  type="serviceRequested"
                  value={serviceRequested}
                  onChange={(e) => setServiceRequested(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="regionRequested">
                <Form.Label>Region Requested:</Form.Label>
                <Form.Control
                  as="select"
                  value={regionRequested}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setRegionRequested(e.target.value);
                  }}
                >
                  <option value="1">Southeast Asia (ASEAN)</option>
                  <option value="2">Japan</option>
                  <option value="3">Korea</option>
                  <option value="4">Hong Kong and Greater Bay Area (HK GBA)</option>
                  <option value="5">Australia and New Zealand (ANZ)</option>
                  <option value="6">Asia Pacific (APAC)</option>
                  <option value="7">Europe, Middle East and Africa (EMEA)</option>
                  <option value="8">North America (NA)</option>
                </Form.Control>
              </Form.Group>
              <br></br>
              <Button block size="sm-3" type="submit" >
                Login
              </Button>
            </Form>
          </Container>
    </div>
  );
}