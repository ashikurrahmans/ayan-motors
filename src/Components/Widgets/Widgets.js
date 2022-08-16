import React from "react";
import ContactDetails from "./ContactDetails";
import CustomerReviews from "./CustomerReviews";
import FeaturedCars from "./FeaturedCars";

const Widgets = () => {
  return (
    <>
      <CustomerReviews></CustomerReviews>
      <FeaturedCars></FeaturedCars>
      <ContactDetails></ContactDetails>
    </>
  );
};

export default Widgets;
