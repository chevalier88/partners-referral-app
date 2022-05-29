import * as React from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types';
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

import axios from 'axios';

const sampleRequest = {
    "row": {
        "id": 13,
        "userId": 10,
        "employeeNumbers": 12,
        "entitiesExisting": "Some",
        "comments": "update join",
        "requestAddressed": false,
        "createdAt": "2022-05-28T02:39:20.835Z",
        "updatedAt": "2022-05-28T02:39:20.835Z",
        "serviceId": 2,
        "partnerId": null,
        "user": {
            "id": 10,
            "name": "Janet Soon",
            "email": "jsoon@globalization-partners.com",
            "password": "abc123",
            "userType": "referring employee",
            "createdAt": "2022-05-16T11:49:42.127Z",
            "updatedAt": "2022-05-16T11:49:42.127Z"
        },
        "service": {
            "id": 2,
            "name": "payroll",
            "createdAt": "2022-05-16T12:21:08.685Z",
            "updatedAt": "2022-05-16T12:21:08.685Z"
        },
        "requests_regions": [
            {
                "id": 4,
                "requestId": 13,
                "regionId": 7,
                "createdAt": "2022-05-28T02:39:20.866Z",
                "updatedAt": "2022-05-28T02:39:20.866Z"
            },
            {
                "id": 3,
                "requestId": 13,
                "regionId": 1,
                "createdAt": "2022-05-28T02:39:20.865Z",
                "updatedAt": "2022-05-28T02:39:20.865Z"
            }
        ],
        "regions": [
            {
                "id": 1,
                "name": "Southeast Asia (ASEAN)",
                "createdAt": "2022-05-16T12:21:37.678Z",
                "updatedAt": "2022-05-16T12:21:37.678Z",
                "requests_regions": {
                    "id": 3,
                    "requestId": 13,
                    "regionId": 1,
                    "createdAt": "2022-05-28T02:39:20.865Z",
                    "updatedAt": "2022-05-28T02:39:20.865Z"
                },
                "coverages": [
                    {
                        "id": 3,
                        "partnerId": 1,
                        "serviceId": 2,
                        "regionId": 1,
                        "createdAt": "2022-05-16T13:18:22.197Z",
                        "updatedAt": "2022-05-16T13:18:22.197Z",
                        "service": {
                            "id": 2,
                            "name": "payroll",
                            "createdAt": "2022-05-16T12:21:08.685Z",
                            "updatedAt": "2022-05-16T12:21:08.685Z"
                        },
                        "partner": {
                            "id": 1,
                            "name": "Hawksford Singapore Pte. Ltd.",
                            "userId": 9,
                            "primaryContactName": "Dario Acconci",
                            "primaryContactEmail": "dario.acconci@hawksford.com",
                            "secondaryContactName": "Gwen Gingoyon",
                            "secondaryContactEmail": "gwen.gingoyon@hawksford.com",
                            "createdAt": "2022-05-16T12:10:16.866Z",
                            "updatedAt": "2022-05-16T12:10:16.866Z",
                            "user": {
                                "id": 9,
                                "name": "Graham Lim",
                                "email": "glim@globalization-partners.com",
                                "password": "abc123",
                                "userType": "partner manager",
                                "createdAt": "2022-05-16T11:49:42.127Z",
                                "updatedAt": "2022-05-16T11:49:42.127Z"
                            }
                        }
                    },
                    {
                        "id": 1,
                        "partnerId": 1,
                        "serviceId": 1,
                        "regionId": 1,
                        "createdAt": "2022-05-16T13:18:22.197Z",
                        "updatedAt": "2022-05-16T13:18:22.197Z",
                        "service": {
                            "id": 1,
                            "name": "entity setup",
                            "createdAt": "2022-05-16T12:21:08.685Z",
                            "updatedAt": "2022-05-16T12:21:08.685Z"
                        },
                        "partner": {
                            "id": 1,
                            "name": "Hawksford Singapore Pte. Ltd.",
                            "userId": 9,
                            "primaryContactName": "Dario Acconci",
                            "primaryContactEmail": "dario.acconci@hawksford.com",
                            "secondaryContactName": "Gwen Gingoyon",
                            "secondaryContactEmail": "gwen.gingoyon@hawksford.com",
                            "createdAt": "2022-05-16T12:10:16.866Z",
                            "updatedAt": "2022-05-16T12:10:16.866Z",
                            "user": {
                                "id": 9,
                                "name": "Graham Lim",
                                "email": "glim@globalization-partners.com",
                                "password": "abc123",
                                "userType": "partner manager",
                                "createdAt": "2022-05-16T11:49:42.127Z",
                                "updatedAt": "2022-05-16T11:49:42.127Z"
                            }
                        }
                    }
                ]
            },
            {
                "id": 7,
                "name": "Europe, Middle East and Africa (EMEA)",
                "createdAt": "2022-05-16T12:21:37.678Z",
                "updatedAt": "2022-05-16T12:21:37.678Z",
                "requests_regions": {
                    "id": 4,
                    "requestId": 13,
                    "regionId": 7,
                    "createdAt": "2022-05-28T02:39:20.866Z",
                    "updatedAt": "2022-05-28T02:39:20.866Z"
                },
                "coverages": [
                    {
                        "id": 4,
                        "partnerId": 1,
                        "serviceId": 2,
                        "regionId": 7,
                        "createdAt": "2022-05-16T13:18:22.197Z",
                        "updatedAt": "2022-05-16T13:18:22.197Z",
                        "service": {
                            "id": 2,
                            "name": "payroll",
                            "createdAt": "2022-05-16T12:21:08.685Z",
                            "updatedAt": "2022-05-16T12:21:08.685Z"
                        },
                        "partner": {
                            "id": 1,
                            "name": "Hawksford Singapore Pte. Ltd.",
                            "userId": 9,
                            "primaryContactName": "Dario Acconci",
                            "primaryContactEmail": "dario.acconci@hawksford.com",
                            "secondaryContactName": "Gwen Gingoyon",
                            "secondaryContactEmail": "gwen.gingoyon@hawksford.com",
                            "createdAt": "2022-05-16T12:10:16.866Z",
                            "updatedAt": "2022-05-16T12:10:16.866Z",
                            "user": {
                                "id": 9,
                                "name": "Graham Lim",
                                "email": "glim@globalization-partners.com",
                                "password": "abc123",
                                "userType": "partner manager",
                                "createdAt": "2022-05-16T11:49:42.127Z",
                                "updatedAt": "2022-05-16T11:49:42.127Z"
                            }
                        }
                    },
                    {
                        "id": 2,
                        "partnerId": 1,
                        "serviceId": 1,
                        "regionId": 7,
                        "createdAt": "2022-05-16T13:18:22.197Z",
                        "updatedAt": "2022-05-16T13:18:22.197Z",
                        "service": {
                            "id": 1,
                            "name": "entity setup",
                            "createdAt": "2022-05-16T12:21:08.685Z",
                            "updatedAt": "2022-05-16T12:21:08.685Z"
                        },
                        "partner": {
                            "id": 1,
                            "name": "Hawksford Singapore Pte. Ltd.",
                            "userId": 9,
                            "primaryContactName": "Dario Acconci",
                            "primaryContactEmail": "dario.acconci@hawksford.com",
                            "secondaryContactName": "Gwen Gingoyon",
                            "secondaryContactEmail": "gwen.gingoyon@hawksford.com",
                            "createdAt": "2022-05-16T12:10:16.866Z",
                            "updatedAt": "2022-05-16T12:10:16.866Z",
                            "user": {
                                "id": 9,
                                "name": "Graham Lim",
                                "email": "glim@globalization-partners.com",
                                "password": "abc123",
                                "userType": "partner manager",
                                "createdAt": "2022-05-16T11:49:42.127Z",
                                "updatedAt": "2022-05-16T11:49:42.127Z"
                            }
                        }
                    }
                ]
            }
        ]
    }
}

function Row(props) {
  console.log(props);
  const { row } = props;
  const [open, setOpen] = useState(false);

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
        <TableCell align="left">{String(row.requestAddressed)}</TableCell>
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
                    <TableCell>Comments</TableCell>
                    <TableCell>Does the Prospect/Client Own Entities?</TableCell>
                    <TableCell align="left">How Many Employees?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.comments}
                    </TableCell>
                    <TableCell>{row.entitiesExisting}</TableCell>
                    <TableCell align="left">{row.employeeNumbers}</TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell>Recommended Partner Manager(s)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row"> regions(m) to coverages(m) to partner to user.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RequestsForPartnerManagers({allRequests, setAllRequests}) {
  useEffect(() => {
    axios.get('/requests')
      .then((result) => {
        const { data } = result;
        const newArray = [];
        for (let i = 0; i < data.length; i++) {
          newArray.push(data[i]);
        }
        setAllRequests(newArray);
      });
  }, []);

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
            <TableCell align="left">Referred Out?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRequests.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
