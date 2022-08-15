import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FooterMiddleSocial = () => {
  const iconStyle = {
    display: "inline-block",
  };

  return (
    <>
      <div>
        <li>
          <BsFillTelephoneFill
            style={iconStyle}
            fontSize="16px"
          ></BsFillTelephoneFill>
          <Link to="tel:01214484554">
            <span className="ml-1 text-sm">0121 4484554</span>
          </Link>
        </li>
        <li className="mt-1">
          <FaMobileAlt style={iconStyle}></FaMobileAlt>
          <Link to="/tel:07860251554">
            <span className="ml-2 text-sm">07860251554</span>
          </Link>
        </li>
        <li className="mt-1">
          <CgMail style={iconStyle}></CgMail>
          <Link to="/">
            <span className="ml-2 text-sm">ashiqur.dream@gmail.com</span>
          </Link>
        </li>
        <div className="flex mt-3">
          <li className="uppercase text-sm font-bold">get social</li>
          <li className="ml-2">
            <Link to="/">
              <FaFacebookF></FaFacebookF>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/">
              <AiFillInstagram></AiFillInstagram>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default FooterMiddleSocial;
