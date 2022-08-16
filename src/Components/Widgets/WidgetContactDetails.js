import React from "react";
import FooterMiddleDirections from "../FooterArea/FooterMiddle/FooterMiddleDirections";
import FooterMiddleSocial from "../FooterArea/FooterMiddle/FooterMiddleSocial";

const WidgetContactDetails = () => {
  return (
    <>
      <div className="list-none text-sm border bg-[#1B1B1B] p-4 my-4 text-white">
        <h1 className="text-white text-xl font-bold my-2">CONTACT DETAILS</h1>
        <li className="mt-1">Unit 3 Varney Business Park</li>
        <li className="mt-1">Varney Av</li>
        <li className="mt-1">West Bromwich</li>
        <li className="mt-1">West Midlands</li>
        <li className="mt-1">B70 6AE</li>
        <div className="ml-[-18px] my-2 ">
          <FooterMiddleSocial></FooterMiddleSocial>
        </div>
        <FooterMiddleDirections></FooterMiddleDirections>
      </div>
    </>
  );
};

export default WidgetContactDetails;
