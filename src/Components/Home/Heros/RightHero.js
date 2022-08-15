import React from "react";
import { Link } from "react-router-dom";

const RightHero = ({ title, description, buttonLink, bgImage }) => {
  return (
    <>
      <div
        className="relative h-[290px] flex items-end justify-start text-left bg-cover bg-center md:ml-4 md:mt-4 lg:mt-0 sm:mt-4"
        Style={`background-image:url(${bgImage})`}
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <main className="pb-5 mb-5 z-10 text-center mx-auto">
          <h1 className="text-3xl text-white font-bold mb-1">{title}</h1>
          <p
            className=" tracking-tight leading-7
                  font-regular text-gray-300 text-base mb-5"
          >
            {description}
          </p>
          <Link
            to={buttonLink}
            className="duration-500 bg-black text-white py-4 px-20 uppercase rounded-lg text-bold hover:bg-white hover:text-black "
          >
            More Info
          </Link>
        </main>
      </div>
    </>
  );
};

export default RightHero;
