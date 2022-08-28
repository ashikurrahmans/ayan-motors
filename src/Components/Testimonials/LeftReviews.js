import React from "react";
import SignleReviewCard from "./SignleReviewCard";

const LeftReviews = () => {
  return (
    <>
      <div className="text-white text-sm">
        <p className="my-1">
          At Ayaan Motors we take pride in providing a unforgettable customer
          experience.
        </p>
        <p className="my-2">
          Over 133 5 Star Reviews on Autotrader, Winners of The Autotrader
          Customer Service Award 2018, 2019 & 2020!
        </p>
        <p className="my-1">
          Please see below just a few testimonials from our many delighted
          customers. If you have bought a car from us please feel free to add
          your testimonial, check out our Autotrader and Google for more genuine
          customer reviews!
        </p>
        <SignleReviewCard></SignleReviewCard>
        <SignleReviewCard></SignleReviewCard>
        <SignleReviewCard></SignleReviewCard>
        <SignleReviewCard></SignleReviewCard>
      </div>
    </>
  );
};

export default LeftReviews;
