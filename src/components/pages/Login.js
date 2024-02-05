import React from "react";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";


export default function Login() {
  //this is a placeholder admin variable.
  const [isAdmin, setIsAdmin] = React.useState(true);
  
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setLoginInfo((pastInfo) => {
      return {
        ...pastInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(loginInfo)

  return (
    <div className="login--container">
      <form className="login--form">
        <MDBInput
          name="email"
          className="mb-4"
          type="email"
          id="form2Example1"
          label="Email address"
          onChange={handleChange}
        />
        <MDBInput
          name="password"
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
          onChange={handleChange}

        />

        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center">
            <MDBCheckbox
              id="form2Example3"
              label="Remember me"
              defaultChecked
            />
          </MDBCol>
          <MDBCol>
            <a href="#!">Forgot password?</a>
          </MDBCol>
        </MDBRow>

        {isAdmin ? (
          <Link to="../Admin">
            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>
          </Link>
        ) : (
          <Link to="../">
            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>
          </Link>
        )}

        <div className="text-center">
          <p>
            Not a member? <Link to="../Register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
