import * as React from 'react';
import { useState, useEffect} from "react";
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
import Checkbox from '@mui/material/Checkbox';

import axios from 'axios';
import RecommendPartnerData from './RecommendPartnerData.jsx';

import "regenerator-runtime";

function Row({row, setAllRequests}) {
  console.log(row);
  console.log(row.partnerId);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [partnerSelected, setPartnerSelected] = useState("");
  const [open, setOpen] = useState(false);

  const [requestAddressStatus, setRequestAddressStatus] = useState(row.requestAddressed);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  // if (requestAddressStatus === true){
  //   queryAddressAlert = <Checkbox {...label} disabled checked />
  //   } else {
  //   queryAddressAlert = <Checkbox {...label} disabled />
  //   };

  // useEffect(() => {
  //   if (requestAddressStatus === true){
  //     queryAddressAlert = <Checkbox {...label} disabled checked />
  //   } else {
  //     queryAddressAlert = <Checkbox {...label} disabled />
  //   }
  // }, [requestAddressStatus]);


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography variant="body" gutterBottom component="div">
            {row.id}
          </Typography>
        </TableCell>
        <TableCell align="left">
          <Typography variant="body" gutterBottom component="div">
            {row.createdAt}
          </Typography>
        </TableCell>
        <TableCell align="left">{row.service.name}</TableCell>
        <TableCell align="left">
          {row.regions.map((region) => (         
            <p key={region.name.toString()}>{region.name}</p>
          ))}
        </TableCell>
        <TableCell align="left">
          {/* {requestAddressStatus ? <Checkbox {...label} disabled checked /> : <Checkbox {...label} disabled />} */}
          {String(requestAddressStatus)}
        </TableCell>
        <TableCell align="left"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Referred by {row.user.name}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                {row.user.email}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Comments
                    </TableCell>
                    <TableCell>
                      Does the Prospect/Client Own Entities?
                    </TableCell>
                    <TableCell>
                      How Many Employees?
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.comments}
                    </TableCell>
                    <TableCell>{row.entitiesExisting}</TableCell>
                    <TableCell>{row.employeeNumbers}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br></br>
              < RecommendPartnerData 
                rowId = {row.id} 
                rowAddressed = {row.requestAddressed} 
                rowPartnerIdAssigned = {row.partnerId} 
                justSubmitted = {justSubmitted} 
                setJustSubmitted = {setJustSubmitted} 
                partnerSelected = {partnerSelected} 
                setPartnerSelected = {setPartnerSelected}
                setRequestAddressStatus = {setRequestAddressStatus} /> 
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RequestsForPartnerManagers({allRequests, setAllRequests}) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell align="left">Date Created</TableCell>
            <TableCell align="left">Request Type</TableCell>
            <TableCell align="left">Destination Region(s)</TableCell>
            <TableCell align="left">Query Addressed?</TableCell>
            <TableCell align="left">
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRequests.map((row) => (
            <Row key={row.name} row={row} setAllRequests = {setAllRequests} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
