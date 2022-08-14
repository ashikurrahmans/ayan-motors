import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const MotorDesRightBottom = () => {
  const iconSize = {
    fontSize: "30px",
    marginBottom: "8px",
    margin: "10px auto",
  };
  return (
    <>
      <div className="flex gap-2 text-black bg-white rounded-sm">
        <div className="m-4">
          <Link to="#">
            <BsTelephoneInbound style={iconSize}></BsTelephoneInbound>
            <span className="text-black uppercase font-bold">Call Back</span>
          </Link>
        </div>
        <div className="m-4">
          <Link to="#">
            <AiFillCar style={iconSize}></AiFillCar>
            <span className="text-black uppercase font-bold">Location</span>
          </Link>
        </div>
        <div className="m-4">
          <Link to="#">
            <MdLocationOn style={iconSize}></MdLocationOn>
            <span className="text-black uppercase font-bold">Location</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MotorDesRightBottom;
