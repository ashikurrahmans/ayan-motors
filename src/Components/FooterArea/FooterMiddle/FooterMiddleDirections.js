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
            placeholder="enter postcode"
            className="uppercase border-none"
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
