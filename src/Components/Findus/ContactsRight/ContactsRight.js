import React from "react";
import FeaturedCars from "../../Widgets/FeaturedCars";
import WidgetContactDetails from "../../Widgets/WidgetContactDetails";

const ContactsRight = () => {
  return (
    <>
      <FeaturedCars></FeaturedCars>
      <WidgetContactDetails></WidgetContactDetails>
      <div className="mt-3">
        <FeaturedCars></FeaturedCars>
      </div>
    </>
  );
};

export default ContactsRight;
