import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PartnersForOneRequest({rowId}){
  const [partnerData, setPartnerData] = useState([]);
  const [assignmentState, setAssignmentState] = useState(false);

  const [partnerSelected, setPartnerSelected] = useState("");

  useEffect(() => {
    axios.get(`/request/${rowId}`)
      .then((result) => {
        const { data } = result;
        console.log('printing 1 partner request data...')
        console.log(data);
        const newArray = [];
        for (let i = 0; i < data.length; i++) {
          newArray.push(data[i]);
        }
        setPartnerData(newArray);
      });
  }, []);

  function handleSubmit (event) {
    event.preventDefault();
    console.log('submitting form...');

    const currentSubmittedRequest = {
        partnerId : partnerSelected,
    };
    console.log('printing currently submitted request...');
    console.log(currentSubmittedRequest);

    // axios.post('/request', currentSubmittedRequest)
    // .then((response)=> {
    //   console.log(response.data);
    // }); 
  }
  
  // write ternary operator for if partnerData is null

  return(
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Recommended Partner(s)</TableCell>
                    <TableCell>Partner Contact</TableCell>
                    <TableCell>Assign Partner (pick 1) or Reject:</TableCell>
                    {/* <TableCell>Assign Partner/ Reject</TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="left">
                        {partnerData.map((partner) => (         
                            <p key={partner.name.toString()}>{partner.name}</p>
                        ))}
                    </TableCell>
                    <TableCell align="left">
                        {partnerData.map((partner) => (         
                            <p key={partner.primaryContactName.toString()}>{partner.primaryContactName} : {partner.primaryContactEmail}</p>
                        ))}
                    </TableCell>
                    <TableCell>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId = "partnerSelected">
                                <Form.Control
                                    as="select"
                                    value={partnerSelected}
                                    placeholder = "select one"
                                    onChange={e => {
                                        console.log("partner value selected:", e.target.value);
                                        setPartnerSelected(e.target.value);
                                    }}>
                                    {partnerData.map((partner) => (         
                                        <option value={partner.id.toString()} key={partner.name.toString()}>
                                            {partner.name}
                                        </option>
                                    ))}
                                    <option value = "" key = "null">-- REJECT; Don't Assign --</option>
                                </Form.Control>
                            </Form.Group>
                            <Button block size="sm-3" type="submit" >
                                Submit
                            </Button>
                        </Form>            
                    </TableCell>
                    {/* <TableCell align="left">
                        slider goes here
                    </TableCell> */}
                </TableRow>
            </TableBody>
            <br></br>
        </Table>
    </div>
    )
}