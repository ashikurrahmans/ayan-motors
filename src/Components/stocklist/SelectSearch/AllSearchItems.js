import React from "react";
import SignleSelectSearchItem from "./SignleSelectSearchItem";
import { SiPlatformdotsh } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";

const AllSearchItems = () => {
  const iconsStyle = {
    background: "white",
    padding: "17px",
    marginLeft: "10px",
    color: "black",
    cursor: "pointer",
  };
  return (
    <>
      <section className="bg-black pb-10">
        <div className="w-10/12 mx-auto">
          <div className="flex">
            <SignleSelectSearchItem></SignleSelectSearchItem>
            <SignleSelectSearchItem></SignleSelectSearchItem>
            <SignleSelectSearchItem></SignleSelectSearchItem>
            <SignleSelectSearchItem></SignleSelectSearchItem>
            <div>
              <button className="uppercase text-white bg-gray-600 px-8 py-2 font-semibold mt-1">
                search
              </button>
            </div>
          </div>

          <div className="lg:flex justify-between justify-items-center  mt-5">
            <p className="mt-3 text-white">Displaying 1 - 16 Of 16 Vehicles</p>
            <div className="flex">
              <span className="mt-2 text-black">
                <SiPlatformdotsh style={iconsStyle} />
              </span>
              <span className="mt-2 hover:bg-black hover:text-white font-black">
                <TbGridDots style={iconsStyle} />
              </span>
              <div className="ml-4">
                <SignleSelectSearchItem></SignleSelectSearchItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllSearchItems;
