import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Form from "react-bootstrap/Form";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function RecommendPartnerData({rowId, rowAddressed, rowPartnerIdAssigned, justSubmitted, setJustSubmitted, partnerSelected, setPartnerSelected, setRequestAddressStatus}){
  const [partnerData, setPartnerData] = useState([]);
  const [partnerAssigned, setPartnerAssigned] = useState("");

  console.log(rowId);
  console.log(rowAddressed);
  console.log(rowPartnerIdAssigned);

  let whatWillAppear;

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
        requestId: rowId,
        partnerId : partnerSelected,
    };
    console.log('printing currently submitted request...');
    console.log(currentSubmittedRequest);
    

    axios.put(`/request/${rowId}`, currentSubmittedRequest)
        .then((response)=> {
            console.log('receiving updated row info...');
            console.log(response.data);
            setJustSubmitted(true);
            setRequestAddressStatus(true);
        }); 
  }
  
  if (rowAddressed === false) {
    if(justSubmitted === false) {
        whatWillAppear = 
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
                        <option value = "" key = "null">-- REJECT, Don't Assign --</option>
                    </Form.Control>
                </Form.Group>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Button block size="sm-3" type="submit" >
                        Submit
                    </Button>
                </Box>

            </Form>
    } else if (justSubmitted === true) {
        if (partnerSelected === ''){
            whatWillAppear = <p>Request <b>Rejected!</b></p>
        } else {
            whatWillAppear = <p>Request <b>Assigned!</b></p>
        }
    }
} else if (rowAddressed === true && rowPartnerIdAssigned === null) {

    whatWillAppear = <p> Request was addressed, but <b>Rejected!</b></p>

} else if (rowAddressed === true && rowPartnerIdAssigned !== null ){
        console.log('query was addressed, and a partner was assigned!')
        useEffect(() => {
            axios.get(`/partner/${rowPartnerIdAssigned}`)
                .then((response) => {
                    console.log('getting the partner we already assigned...');
                    const {data} = response;
                    console.log(data.name);
                    setPartnerAssigned(data.name);
                });
        }, []);

        whatWillAppear = <p> ALREADY Assigned to <b>{partnerAssigned}</b>!</p>
    }
  
  return(
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Recommended Partner(s)</TableCell>
                    <TableCell>Partner Contact(s)</TableCell>
                    <TableCell>Assign a Partner?</TableCell>
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
                        {whatWillAppear}
                    </TableCell>
                </TableRow>
            </TableBody>
            <br></br>
        </Table>
    </div>
    )
}