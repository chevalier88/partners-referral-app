import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default function RequestForm() {
  const [serviceRequested, setServiceRequested] = useState("");
  const [regionsRequested, setRegionsRequested] = useState([]);
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
              <Form.Group size="sm-3" controlId="regionsRequested">
                <Form.Label>Region(s) Requested:</Form.Label>
                <Form.Control
                  type="regionsRequested"
                  value={regionsRequested}
                  onChange={(e) => setRegionsRequested(e.target.value)}
                />
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