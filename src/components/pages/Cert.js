import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from 'mdb-react-ui-kit';


export default function Cert(props) {
  return (
    <main className="cert--container">
      <div className="cert--card">
        <h1>Request for a Volunteering Certificate here!</h1>
        <MDBInput label='Email input' id='typeEmail' type='email' />

        <MDBBtn outline rounded>
          Request
        </MDBBtn>
      </div>
    </main>
  );
}
