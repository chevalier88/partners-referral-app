import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Request from "./Request.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
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
        setAllRequests(newArray);
      });
  }, []);

  console.log('checking out all Requests...')
  console.log(allRequests);

  // derived from https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
  const DisplayRequestsData = allRequests.map((request)=>{
    return(
      <tr>
        <td>{allRequests.indexOf(request)}</td>
        <td>{request.createdAt}</td>
        <td>{request.service.name}</td>
        <td>{request.requests_regions.map((region) => {
          `${region.regionId}`
        })}</td>
        <td>{request.user.name}</td>
        <td>{String(request.requestAddressed)}</td>
        <td>
          {/* <Link to ></Link> */}
        </td>
      </tr>
    )
  });


  return (
    <div>
      <h1>All Partner Requests</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Date Created</th>
              <th>Request Type</th>
              <th>Regions</th>
              <th>Submitted By</th>
              <th>Completed?</th>
              <th>View/Assign</th>
            </tr>
          </thead>
          <tbody>
            {DisplayRequestsData}
          </tbody>
        </Table>
      {/* <Routes>
        <Route path="/about" element = {<Request/>} />
      </Routes> */}


    </div>
  );
}