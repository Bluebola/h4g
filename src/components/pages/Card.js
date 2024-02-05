import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, image, name, date, type, isFavourite }) {
  return (
    <div className="card">
      <img src={image} alt="Placeholder text" className="card--image img-fluid" />
      <div className="card--content">
        <div className="card--name">{name}</div>
        <div className="card--date">{date} </div>
        <p className="card--type">{type}</p>
        <Link className="card--button" to={`/Card/${id}`}>See more</Link>
      </div>
    </div>
  );
}
