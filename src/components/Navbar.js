import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';


export default function Navbar() {
  //if isAdmin = true 
  return (
    <nav className="navBar">
      <Link className="navBar--title" to="/"><MDBIcon className="mx-2" fas icon="hands-helping" />Home</Link>
      <div className="navBar--container">
        <Link className="navBar--feedback" to="/Feedback">Feedback</Link>
        <Link className="navBar--cert" to="/Cert">Request Cert</Link>
        <Link className="navBar--login" to="/Login">Login</Link>
        <Link className="navBar--admin" to="/Register">Register</Link>
      </div>
      
    </nav>
  );
}
