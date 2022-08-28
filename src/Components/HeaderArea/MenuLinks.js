import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuLinks = () => {
  return (
    <>
      <Link
        to="/"
        className=" hover:bg-gray-700 text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium  inline-flex "
      >
        Stoclist
        <IoMdArrowDropdown
          style={{ marginTop: "2px", marginLeft: "4px", fontSize: "22px" }}
        />
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 md:px-0 py-2 rounded-md text-sm font-medium"
      >
        Previously Sold
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Finance
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Warranty
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Sell Your Car
      </Link>
      <Link
        to="/testimonials"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Testimonials
      </Link>
      <Link
        to="/find-us"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Find Us
      </Link>
    </>
  );
};

export default MenuLinks;
