import React from "react";
import { BsCheckLg } from "react-icons/bs";

const CarCondition = () => {
  const iconStyle = {
    fontSize: "20px",
    display: "inline",
    color: "green",
  };
  return (
    <>
      <section className="bg-white py-8 w-10/12 mx-auto">
        <h1 className="text-black text-4xl font-bold mb-2">
          At Ayaan as standard..
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="mt-10">
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Full MOT</span>
            </li>
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Service</span>
            </li>
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Full Valet</span>
            </li>
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">HPI Clear</span>
            </li>
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">6 Months Warranty</span>
            </li>
            <li className="list-none mt-2">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">
                Detailing Service Available
              </span>
            </li>
          </div>
          <div className="col-span-2">
            <img
              className="w-full h-46 "
              src="https://www.ayaanmotors.com/admin/uploaded_photos/module_42_css_image.jpg"
              alt="cars"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarCondition;
