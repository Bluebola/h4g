import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data";

export default function CardDetail() {
  let { id } = useParams();
  const activity = data.find(function (dataset) {
    console.log(id)
    console.log(dataset.id)
    return String(dataset.id) === id;
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
