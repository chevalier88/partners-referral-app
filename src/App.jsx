import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// we have to build the form first
function BillForm({ bills, setBills }) {
  // Control the form input value using a state variable name.
  // here we pass the state INTO the component params because it ends up becoming impacted by axios
  // axios will change the hook state using setBills to whatever bills will now be
  // this in turn produces 

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents refreshing?
    console.log('asdsa');
    console.log(event.target.Bill.value);

    axios.post('/bill', {
      name: event.target.Bill.value,
    })
      .then((response) => {
        console.log(response.data);
        const newBills = [...bills];
        newBills.push(event.target.Bill.value);
        setBills(newBills);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Bill</Form.Label>
          <Form.Control placeholder="Bill input" name="Bill" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      <br />
      <br />
      Bills So Far:
      {' '}
      <ul>
        {bills.map((bill) => (
          <li key={bill.toString()}>
            {bill}
          </li>
        ))}
      </ul>
    </div>
  );
}
// form shower will spawn the initial form
function FormShower({ bills, setBills }) {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (event) => {
    event.preventDefault();
    axios
      .get('/bills')
      .then((response) => {
        console.log('receiving data from db after findAll bills...');
        console.log(response.data);
        const parseableArrayOfBillStrings = response.data.map((({ name }) => name));
        console.log(parseableArrayOfBillStrings);
        setBills(parseableArrayOfBillStrings);
      })
      .catch((error) => console.log(error));
    setShowForm(true);
    console.log('refresh prevented');
  };

  return (
    <div>
      <form>
        <button onClick={showFormHandler}>Create New Bill</button>
      </form>


    </div>
  );
}

export default function App() {
  const [bills, setBills] = useState([]);

  return (
    <div>
      <FormShower bills={bills} setBills={setBills} />
    </div>
  );
}
