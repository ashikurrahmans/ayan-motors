import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const QuickNavLeft = () => {
  return (
    <div className="text-sm">
      <li className="my-2">
        <Link
          to="#"
          className="flex items-center space-x-3 hover:text-sky-400 transition"
        >
          <MdKeyboardArrowRight></MdKeyboardArrowRight>
          <span>Stocklist</span>
        </Link>
      </li>
      <li className="my-2">
        <Link
          to="#"
          className="flex items-center space-x-3 hover:text-sky-400 transition"
        >
          <MdKeyboardArrowRight></MdKeyboardArrowRight>

          <span>Finance</span>
        </Link>
      </li>
      <li className="my-2">
        <Link
          to="#"
          className="flex items-center space-x-3 hover:text-sky-400 transition"
        >
          <MdKeyboardArrowRight></MdKeyboardArrowRight>

          <span>Sell Your Car</span>
        </Link>
      </li>
      <li className="my-2">
        <Link
          to="#"
          className="flex items-center space-x-3 hover:text-sky-400 transition"
        >
          <MdKeyboardArrowRight></MdKeyboardArrowRight>
          <span>Find Us</span>
        </Link>
      </li>
    </div>
  );
};

export default QuickNavLeft;
