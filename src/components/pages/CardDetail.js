import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";
import { MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function CardDetail() {
  let { id } = useParams(); //This takes the current parameter id of the url you currently are inside and saves it to a variable. Basically its the url from inside the  <Link /> component that linked you here
  const activity = data.find(function (dataset) {
    return String(dataset.id) === id; //Returns the first array from data that has an id of id.
  });
  return (
    <main className="cardDetail--container">
      <div className="cardDetail--info">
        <MDBTypography tag="div" className="display-6 fw-bold mt-5 ">
          {activity.name}
        </MDBTypography>
        <p className="fw-light  mt-3">- {activity.location}</p>
        <img
          className="cardDetail--image"
          src={activity.img}
          alt="cardimg"
        ></img>
        
        <MDBRow tag="dl" className="mt-3">
          <MDBCol tag="dt" sm="3">
            Date & Time:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
          {activity.date}, {activity.time} SGT.
          </MDBCol>

          <MDBCol tag="dt" sm="3">
            About the activity:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
            <p>
              {activity.description}
            </p>
            
          </MDBCol>

          <MDBCol tag="dt" sm="3">
            Available spots left:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
            <p>
             {activity.spots}
            </p>
          </MDBCol>

         

         

         
        </MDBRow>
      </div>

      <div className="cardDetail--card">
        <p>{activity.description}</p>
        <p>{activity.location}</p>
        <p>CHANGE</p>
      </div>
    </main>
  );
}
