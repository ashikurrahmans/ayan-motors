import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SingleCarItem = () => {
  return (
    <>
      <section className="bg-black">
        <div className="w-10/12 mx-auto shadow-lg shadow-slate-500 rounded-lg">
          <div className="lg:grid grid-cols-3">
            <div className="lg:flex gap-4 col-span-2">
              <img
                src="https://admin.cardealer5.co.uk/superadmin/uploaded_photos/1_logo.png"
                alt="cars"
                className="w-32 h-24 bg-gray-500"
              />
              <div className=" bg-gray-900 w-full py-4 pl-4">
                <h1 className="uppercase font-bold text-white text-2xl">
                  FORD FIESTA
                </h1>
                <p className="text-white text-base">
                  HATCHBACK ZETEC S RED EDITION (2015/15)
                </p>
              </div>
            </div>
            <div className="bg-gray-800 text-center">
              <h2 className="text-white text-4xl font-bold mt-6">£7,975</h2>
            </div>
          </div>
          <div className="bg-white my-3 font-semibold">
            <div className="lg:grid grid-cols-4 py-3 ml-6">
              <div className="flex">
                <BsFillCheckCircleFill />
                <span className="uppercase text-xs ml-2">
                  3p AIR RIDE SUSPENSION
                </span>
              </div>
              <div className="flex">
                <BsFillCheckCircleFill />
                <span className="uppercase text-xs ml-2">
                  3p AIR RIDE SUSPENSION
                </span>
              </div>
              <div className="flex">
                <BsFillCheckCircleFill />
                <span className="uppercase text-xs ml-2">
                  3p AIR RIDE SUSPENSION
                </span>
              </div>
              <div className="flex">
                <BsFillCheckCircleFill />
                <span className="uppercase text-xs ml-2">
                  3p AIR RIDE SUSPENSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCarItem;
