import React from "react";
import BredCumbs from "../Shared/BredCumbs";
import LeftReviews from "./LeftReviews";
import RightWidgets from "./RightWidgets";

const TestimonialsPage = () => {
  return (
    <>
      <section>
        <BredCumbs
          title="CUSTOMER SATISFACTION GUARANTEED!"
          imageurl="https://m.atcdn.co.uk/retailer/media/w1024/8a428db279f4ee280179f5208f8a0007.jpg"
        ></BredCumbs>
        <div></div>
      </section>

      <div className="bg-black py-10 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-10/12 mx-auto ">
          <div className="col-span-2 bg-[#1B1B1B] py-6 px-6 border">
            <LeftReviews></LeftReviews>
          </div>
          <div>
            <RightWidgets></RightWidgets>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
