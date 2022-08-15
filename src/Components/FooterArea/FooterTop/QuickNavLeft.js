import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const QuickNavRight = () => {
  return (
    <>
      <div className="text-sm">
        <li className="my-2">
          <Link
            to="#"
            className="flex items-center space-x-3 hover:text-sky-400 transition"
          >
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
            <span>Home</span>
          </Link>
        </li>
        <li className="my-2">
          <Link
            to="#"
            className="flex items-center space-x-3 hover:text-sky-400 transition"
          >
            <MdKeyboardArrowRight></MdKeyboardArrowRight>

            <span>Previously Sold</span>
          </Link>
        </li>
        <li className="my-2">
          <Link
            to="#"
            className="flex items-center space-x-3 hover:text-sky-400 transition"
          >
            <MdKeyboardArrowRight></MdKeyboardArrowRight>

            <span>Warranty</span>
          </Link>
        </li>
        <li className="my-2">
          <Link
            to="#"
            className="flex items-center space-x-3 hover:text-sky-400 transition"
          >
            <MdKeyboardArrowRight></MdKeyboardArrowRight>

            <span>Testimonials</span>
          </Link>
        </li>
      </div>
    </>
  );
};

export default QuickNavRight;
