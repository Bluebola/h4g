import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";
import { MDBBtn, MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function CardDetail() {
  let { id } = useParams(); //This takes the current parameter id of the url you currently are inside and saves it to a variable. Basically its the url from inside the  <Link /> component that linked you here
  const activity = data.find(function (dataset) {
    return String(dataset.id) === id; //Returns the first array from data that has an id of id.
  });

  const [isEnrolled, setIsEnrolled] = React.useState(false);
  console.log(isEnrolled);
  function handleClick(event) {
    setIsEnrolled(!isEnrolled);
  }
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
            Time:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
            {activity.time} SGT.
          </MDBCol>

          <MDBCol tag="dt" sm="3">
            About the activity:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
            <p>{activity.description}</p>
          </MDBCol>

          <MDBCol tag="dt" sm="3">
            Available spots left:
          </MDBCol>
          <MDBCol tag="dd" sm="9">
            <p>{activity.spots}</p>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="cardDetail--cardContainer">
        <div className="cardDetail--card">
          <div className="cardDetail--content ">
            <div className="cardDetail--date">
              <b className="mx-3">Date:</b> {activity.date}{" "}
            </div>
            <p className="cardDetail--type">
              <b className="mx-3">Type:</b>
              {activity.type}
            </p>
          </div>

          {!isEnrolled ? (
            <MDBBtn
              outline
              rounded
              className="mx-2 cardDetail--button"
              color="danger"
              onClick={handleClick}
            >
              Enrol Now!
            </MDBBtn>
          ) : (
            <MDBBtn
              outline
              rounded
              className="mx-2 cardDetail--button"
              color="primary"
              onClick={handleClick}
            >
              Enrolled!
            </MDBBtn>
          )}
        </div>
      </div>
    </main>
  );
}
