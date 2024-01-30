import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navBar">
      <Link className="navBar--title" to="/">Home</Link>
      <div className="navBar--container">
        <Link className="navBar--feedback" to="/Feedback">Feedback</Link>
        <Link className="navBar--cert" to="/Cert">Submit Cert</Link>
        <Link className="navBar--login" to="/Login">Login</Link>
      </div>
      
    </nav>
  );
}
