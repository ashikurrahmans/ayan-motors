import React from "react";
import { Link } from "react-router-dom";

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
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
      >
        Stoclist
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium"
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
        to="#"
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
