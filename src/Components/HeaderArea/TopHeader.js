import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

const TopHeader = () => {
  const fontSize = {
    fontSize: "19px",
    color: "white",
    marginLeft: "30px",
    marginTop: "60px",
  };
  const iconStyle = {
    display: "inline-block",
  };
  return (
    <>
      <section Style="background-image:url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)">
        <div className="bg-[#000000] opacity-80">
          <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-between justify-items-center pb-8 pt-4">
            <div className="flex">
              <Link to="#">
                <FaFacebookF style={fontSize}></FaFacebookF>
              </Link>

              <Link to="#">
                <BsInstagram style={fontSize}></BsInstagram>
              </Link>
              <Link to="#">
                <AiOutlineMail style={fontSize} fontSize="30px"></AiOutlineMail>
              </Link>
            </div>
            <div>
              <Link to="/">
                <img
                  className="h-24 w-full"
                  src="https://www.ayaanmotors.com/admin/uploaded_photos/site_logo.png?nc=1311"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="list-none text-white inline-block mt-10">
              <li>
                <BsFillTelephoneFill style={iconStyle}></BsFillTelephoneFill>
                <Link to="tel:01214484554">
                  <span className="ml-2 font-bold">0121 4484554</span>
                </Link>
              </li>
              <li className="mt-2">
                <FaMobileAlt style={iconStyle}></FaMobileAlt>
                <Link to="/tel:07860251554">
                  <span className="ml-2 font-bold">07860251554</span>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
