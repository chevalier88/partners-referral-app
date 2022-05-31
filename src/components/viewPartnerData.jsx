import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ViewPartnerData({rowId, rowAddressed, rowPartnerIdAssigned}){
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
  
  // write ternary operator for if partnerData is null
  if (rowAddressed === false) {
    whatWillAppear = <p> PENDING Assignment</p>
    } else if (rowAddressed === true && rowPartnerIdAssigned === null) {

        whatWillAppear = <p> Request was addressed, but REJECTED! </p>
        
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

        whatWillAppear = <p> ALREADY Assigned to {partnerAssigned}!</p>
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