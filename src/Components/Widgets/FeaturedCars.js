import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const FeaturedCars = () => {
  const iconStyle = {
    fontSize: "25px",
    marginLeft: "65px",
  };
  return (
    <>
      <div className="bg-[#1B1B1B] p-4 border ">
        <h1 className="text-white text-xl uppercase font-bold my-2">
          Featured Cars
        </h1>
        <img
          src="https://www.ayaanmotors.com/assets/696948/large/a37e70fad52cd1356e9a5ebf0378ef9f_696948.jpg"
          alt="cars"
          className="rounded-lg"
        />
        <div className="flex my-3">
          <h2 className="text-white font-bold text-xl uppercase">
            mercedes-benz
          </h2>
          <span className="text-white ml-2 text-xs mt-1">A class</span>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1">
          <button className="text-white bg-[#5E5E5E] p-2 rounded">
            £30.975
          </button>
          <button className="text-white bg-black">
            <span className="text-[10px] block">Finance from</span>£662
          </button>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 my-2">
          <button className="text-white bg-[#5E5E5E] p-2 rounded">
            <MdKeyboardArrowLeft style={iconStyle} />
          </button>
          <button className="text-white bg-black">
            <MdKeyboardArrowRight style={iconStyle} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedCars;
