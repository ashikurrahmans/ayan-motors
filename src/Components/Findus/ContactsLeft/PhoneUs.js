import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

const PhoneUs = () => {
  const iconStyle = {
    display: "inline-block",
    marginRight: "10px",
    fontSize: "17px",
    marginLeft: "5px",
  };
  return (
    <>
      <div className="text-black text-xl bg-white shadow-lg rounded">
        <h2 className="text-black text-base font-bold ml-2 mt-2">
          Phone us on:
        </h2>
        <div className="list-none my-2 mx-2">
          <li>
            <BsFillTelephoneFill style={iconStyle} />
            <span className="text-base font-bold">0121 4484554</span>
          </li>
          <li>
            <FaMobileAlt style={iconStyle} />
            <span className="text-base font-bold">07860251554</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default PhoneUs;
