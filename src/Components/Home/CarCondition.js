import React from "react";
import { BsCheckLg } from "react-icons/bs";

const CarCondition = () => {
  const iconStyle = {
    fontSize: "18px",
    display: "inline",
    color: "#999999",
  };
  return (
    <>
      <section className="bg-white py-8 w-10/12 mx-auto ">
        <h1 className="text-black text-4xl font-bold mb-2">
          At Ayaan as standard..
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-6 md:gap-6 sm:gap-0">
          <div className="mt-10">
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Full MOT</span>
            </li>
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Service</span>
            </li>
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">Full Valet</span>
            </li>
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">HPI Clear</span>
            </li>
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">6 Months Warranty</span>
            </li>
            <li className="list-none mt-1">
              <BsCheckLg style={iconStyle}></BsCheckLg>
              <span className="ml-4 font-bold">
                Detailing Service Available
              </span>
            </li>
          </div>
          <div className="col-span-2 lg:ml-20 md:ml-10 sm:ml-0 mt-8">
            <img
              className="w-[300] h-46 "
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
