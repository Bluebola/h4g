import React from "react";
import data from "../../Data";
import Card from "./Card";

export default function Home(props) {

  const cards = data.map(function (item) {
    console.log(item.id)
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
    <>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/582/230/original/raised-hands-with-heart-isolated-on-white-background-volunteering-charity-donate-blood-concept-thank-for-care-vote-of-crowd-flat-design-vector.jpg"
          alt="volunteering people"
        ></img>
      </div>
      <div>
        <h1>Welcome new volunteer,</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving the comfort of your own home.
        </p>
      </div>
      <div>{cards}</div>
    </>
  );
}
