import React from "react";
import { Link } from "react-router-dom";
import { MDBFile } from "mdb-react-ui-kit";
import { MDBTypography } from 'mdb-react-ui-kit';

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Admin() {
  return (
    <div className="register--container">
      <form className="register--form">
      <MDBTypography tag='div' className='display-6 mb-3'>
        Admin - submit new volunteering activities here.
      </MDBTypography>
        <MDBInput name="Name" id="form3Example1" label="First name" className="mb-3"/>
        <MDBFile label="Input picture file" id="customFile" className="mb-3"/>
        <MDBInput
          name="email"
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Description"
        />
        <MDBInput
          name="time"
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Time"
        />
        <MDBInput
          name="password"
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Location"
        />
          <MDBBtn type="submit" className="mb-4" block>
            Submit volunteering activity
          </MDBBtn>
      </form>
    </div>
  );
}
