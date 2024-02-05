import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";


export default function Register() {
  //This is the state variable that holds the user's info as they fill up the register form.
  const [registerInfo, setRegisterInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  //This function will update the registerInfo object everytime any of the inputs have changed.
  function handleChange(event) {
    setRegisterInfo((registerInfo) => {
      return {
        ...registerInfo,
        [event.target.name]: event.target.value,
      };
    });
  }
  
  console.log(registerInfo);

  function handleClick(event) {
    //send to database HERE
  }

  return (
    <div className="register--container">
      <form className="register--form">
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              name="firstName"
              id="form3Example1"
              label="First name"
              onChange={handleChange}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              name="lastName"
              id="form3Example2"
              label="Last name"
              onChange={handleChange}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          name="email"
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
          onChange={handleChange}
        />
        <MDBInput
          name="password"
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
          onChange={handleChange}
        />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Subscribe to our newsletter"
          defaultChecked
        />

        <MDBBtn type="submit" className="mb-4" block onClick = {handleClick} >
          Sign up
        </MDBBtn>
      </form>
    </div>
  );
}
