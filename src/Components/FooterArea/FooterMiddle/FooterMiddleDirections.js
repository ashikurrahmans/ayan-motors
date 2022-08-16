import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FooterMiddleDirections = () => {
  const inputField = {
    border: "none",
    borderBottom: "2px solid #fff",
  };

  return (
    <>
      <section>
        <h1 className="text-white text-base mb-2">GET DIRECTIONS</h1>
        <form>
          <input
            type="text"
            placeholder="Enter postcode"
            className="appearance-none bg-transparent border-none w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            style={inputField}
          />
          <button to="#" className="bg-white text-black p-2 rounded ml-2">
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </form>
      </section>
    </>
  );
};

export default FooterMiddleDirections;
