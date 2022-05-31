import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from '@mui/material/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

export default function RequestForm({userData}) {
  const userID = userData.id;
  console.log(userID);
  const [serviceRequested, setServiceRequested] = useState("");
  const [regionsRequested, setRegionsRequested] = useState([]);
  const [entitiesStatus, setEntitiesStatus] = useState("");
  const [employeeNumbers, setEmployeeNumbers] = useState(0);
  const [comments, setComments] = useState("");

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/requests`; 
    navigate(path);
  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log('submitting form...');
    console.log(serviceRequested, regionsRequested, entitiesStatus, employeeNumbers, comments);

    const currentSubmittedRequest = {
      userId : userID,
      serviceId: serviceRequested,
      employeeNumbers: employeeNumbers,
      entitiesExisting: entitiesStatus,
      comments: comments,
      requestAddressed: false,
      regions: regionsRequested,
    };
    console.log('printing currently submitted request...');
    console.log(currentSubmittedRequest);

    axios.post('/request', currentSubmittedRequest)
    .then((response)=> {
      console.log(response.data);
    }); 
    
    routeChange();
  }
  
  return (
    <div>
      <Container maxWidth = "sm">
        <Alert severity = "info">Logged In as Referring Employee! Tell us about your request, please:</Alert>
      </Container>
      <Container maxWidth = "md">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="serviceRequested">
            <br></br>
            <Form.Label>Service Requested:</Form.Label>
            <Form.Control
              as="select"
              value={serviceRequested}
              placeholder = "select one"
              onChange={e => {
                console.log("e.target.value", e.target.value);
                setServiceRequested(e.target.value);
              }}
            >
              <option value="1">Entity Setup</option>
              <option value="2">Payroll</option>
              <option value="3">Venture Capital</option>
              <option value="4">HR Consulting</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="regionsRequested">
            <br></br>
            <Form.Label>Region(s) Requested (Ctrl + Click as many relevant regions):</Form.Label>
            <Form.Control
              as="select"
              multiple value={regionsRequested}
              onChange={e => setRegionsRequested([].slice.call(e.target.selectedOptions).map(item => item.value))}>

              {/* onChange={e => {
                console.log("e.target.value", e.target.value);
                setRegionsRequested(e.target.value);
              }} */}
            
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
          <Form.Group controlId="entitiesStatus">
            <br></br>
            <Form.Label>Does your Prospect/Client possess entities in the Region Requested?</Form.Label>
            <Form.Control
              as="select"
              value={entitiesStatus}
              onChange={e => {
                console.log("e.target.value", e.target.value);
                setEntitiesStatus(e.target.value);
              }}
            >
              <option value="All">Yes</option>
              <option value="Some">In some locations only, but not all</option>
              <option value="None">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group size="sm-3" controlId="employeeNumbers">
            <br></br>
            <Form.Label>Number of Employees (if relevant):</Form.Label>
            <Form.Control
              autoFocus
              type="employeeNumbers"
              value={employeeNumbers}
              onChange={(e) => setEmployeeNumbers(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="comments">
              <br></br>
              <Form.Label>Please write as much detail as you can about your request below, including your prospect/client's name, company, title and email address:
              </Form.Label>
              <Form.Control 
                autoFocus
                as="textarea" rows={3} 
                value = {comments}
                onChange = {(e) => setComments(e.target.value)}
              />
          </Form.Group>
          <br></br>
          <Button block size="sm-3" type="submit" >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}