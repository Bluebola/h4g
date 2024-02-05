import React from "react";
import data from "../../Data";
import Carousel from "../Carousel";
import Card from "./Card";

export default function Home(props) {
  const cards = data.map(function (item) {
    console.log(item.id);
    return (
      <Card
        id={item.id}
        image={item.img}
        name={item.name}
        date={item.date}
        type={item.type}
        isFavourite={item.isFavourite}
      />
    );
  });

  return (
    <main className="home">
      <div className="home--intro">
        <h1>Who we are:</h1>
        <p>
          We are a non-profit organisation seeking to provide a one-stop
          platform for users to seamlessly apply for various different
          volunteering opportunities. We assist them such that they can start
          their volunteering experience hassle-free.
        </p>
        <Carousel />
      </div>
      <div className="home--text">
      <hr></hr>

        <p>
          Join new and unique interactive activities led by one-of-a-kind hosts,
          all without leaving the comfort of your own home.
        </p>
        <p> Here is what we have to offer:</p>
      </div>
      <div className="home--cards">{cards}</div>
    </main>
  );
}
