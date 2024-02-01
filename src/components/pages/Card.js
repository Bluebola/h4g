import React from "react";
import { Link } from "react-router-dom";


export default function Card({ id, image, name, date, type, isFavourite }) {
    return (
    <div className="card">
      <img src={image} alt = "Placeholder text" className="card--image" />
      <div className="card--stats">
        <span className="card--name">{name}</span>
        <span className="card--date">{date} • </span>
      </div>
      <p className="card--type">{type}</p>
      <Link to={`/Card/${id}`}>See more</Link>
    </div>
  );
}
