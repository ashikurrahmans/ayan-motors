import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const MotorDesRightBottom = () => {
  const iconSize = {
    fontSize: "22px",
    marginBottom: "8px",
    margin: "10px auto",
  };
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  md:mr-4 text-black bg-white rounded-sm lg:w-[270px] sm:w-[300px] sm:mx-auto mt-4 lg:ml-4 ">
        <div className="m-4">
          <Link to="#">
            <BsTelephoneInbound style={iconSize}></BsTelephoneInbound>
            <span className="text-black capitalize font-semibold text-sm ml-2">
              Call
            </span>
          </Link>
        </div>
        <div className="m-4">
          <Link to="#">
            <AiFillCar style={iconSize}></AiFillCar>
            <span className="text-black capitalize font-semibold text-sm">
              drive
            </span>
          </Link>
        </div>
        <div className="m-4">
          <Link to="#">
            <MdLocationOn style={iconSize}></MdLocationOn>
            <span className="text-black capitalize font-semibold text-sm">
              Location
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MotorDesRightBottom;
