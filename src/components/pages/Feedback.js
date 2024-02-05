import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="feedback--container">
      <form className="feedback--content">
        <p>Please enter your feedback here:</p>
        <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Email address"
        />
        <div class="form-outline mb-0 feedback--textbox" data-mdb-input-init>
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
        </div>
        <div id="textExample1" className="form-text mb-4 mx-1">
          Your feedback is extremely important to us. Please enter your feedback
          above.
        </div>

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form4Example4"
          label="Send me a copy of this message"
          defaultChecked
        />

        <MDBBtn type="submit" className="mb-4" block>
          Submit Feedback
        </MDBBtn>
      </form>
    </div>
  );
}
