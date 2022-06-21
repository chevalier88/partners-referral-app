import React, { useState, useEffect} from "react";

// import Table from "react-bootstrap/Table";

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import axios from "axios";

export default function Requests({allRequests, setAllRequests}) {

  useEffect(() => {
    axios.get('/requests')
      .then((result) => {
        const { data } = result;
        console.log(data);
        const newArray = [];
        for (let i = 0; i < data.length; i++) {
          newArray.push(data[i]);
        }
        setAllRequests([...data]);
      });
  }, []);

  console.log('checking out all Requests...')

  // derived from https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
  // function oneRequestRegions(regions){
  //   regions.name
  // }

  const DisplayRequestsData = allRequests.map((request)=>{
    return(
      <tr>
        <td>{request.id}</td>
        <td>{request.createdAt}</td>
        <td>{request.service.name}</td>
        <td>
          <ul>
            {request.regions.map((region) => (         
              <li key={region.name.toString()}>{region.name}</li>
            ))}
          </ul>

        </td>
        <td>{request.user.name}</td>
        <td>{String(request.requestAddressed)}</td>
      </tr>

    )
  });


  // return (
  //   <div>
  //     <h1>All Partner Requests</h1>
  //     <Table responsive>
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>Date Created</th>
  //           <th>Request Type</th>
  //           <th>Regions</th>
  //           <th>Submitted By</th>
  //           <th>Completed?</th>
  //           <th>View/Assign</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {DisplayRequestsData}
  //       </tbody>
  //     </Table>
  //   </div>
  // );
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {/* <TableCell /> */}
            <TableCell>#</TableCell>
            <TableCell align="right">Date Created</TableCell>
            <TableCell align="right">Request Type</TableCell>
            <TableCell align="right">Regions</TableCell>
            <TableCell align="right">Submitting Employee</TableCell>
            <TableCell align="right">Referral Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {allRequests.map((row) => (
            <Row key={String(row)} row={row} />
          ))} */}
          {DisplayRequestsData}
        </TableBody>
      </Table>
    </TableContainer>
  );
}