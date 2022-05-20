import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Request from "./Request.jsx";

export default function Requests({allRequests, setAllRequests}) {
  console.log(allRequests);

  // derived from https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
  const DisplayRequestsData = allRequests.map((request)=>{
    return(
      <tr>
        <td>{allRequests.indexOf(request)}</td>
        <td>{request.services_id}</td>
        <td>{request.regions_id}</td>
        <td>{String(request.request_addressed)}</td>
        <td><span data-feather="edit"></span></td>
      </tr>
    )
  });

  return (
    <div>
      <h1>All Requests</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Service Request Type</th>
              <th>Region</th>
              <th>Completed?</th>
              <th>View/Assign</th>
            </tr>
          </thead>
          <tbody>
            {DisplayRequestsData}
          </tbody>
      </Table>
    </div>
  );
}