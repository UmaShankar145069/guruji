import React from "react";
import ReactStars from "react-rating-stars-component";

const example = {
  size: 30,
  count: 5,
  isHalf: false,
  value: 4,
  color: "gray",
  activeColor: "yellow",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};

const RatingStars = () => {
  return (
    <>
      <ReactStars {...example} />
    </>
  );
};

export default RatingStars;
