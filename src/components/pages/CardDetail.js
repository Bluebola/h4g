import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";

export default function CardDetail() {
  let { id } = useParams(); //This takes the current parameter id of the url you currently are inside and saves it to a variable. Basically its the url from inside the  <Link /> component that linked you here
  const activity = data.find(function (dataset) {  
    return String(dataset.id) === id; //Returns the first array from data that has an id of id.
  });
  return (
    <div>
      <h1>Card details of individual cards will be displayed here.</h1>
      <p>{activity.description}</p>
      <p>{activity.location}</p>
      <p>CHANGE</p>
    </div>
  );
}
