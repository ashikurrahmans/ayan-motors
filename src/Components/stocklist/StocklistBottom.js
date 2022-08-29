import React from "react";
import { Link } from "react-router-dom";

const StocklistBottom = () => {
  return (
    <>
      <div className="bg-white">
        <div className="py-4 grid justify-items-end w-10/12">
          <div className="lg:flex gap-5">
            <p className="text-xs mt-3">
              Get Stock Updates Directly Into Your Inbox SIGN ME UP
            </p>
            <button className="uppercase text-base bg-gray-900 py-2 px-5 text-white rounded">
              sign me up
            </button>
          </div>
        </div>
      </div>
      <section className="w-10/12 mx-auto">
        <div className="text-white">
          <h1 className="my-4 text-xl">
            <span className="font-bold">USED CARS</span> IN WEST BROMWICH, WEST
            MIDLANDS
          </h1>
          <div className="list-none lg:grid grid-cols-5 gap-6 text-sm">
            <li>
              <Link to="/">Used AUDI</Link>
            </li>
            <li>
              <Link to="/">Used BMW</Link>
            </li>
            <li>
              <Link to="/">Used FORD</Link>
            </li>
            <li>
              <Link to="/">Used MERCEDES-BENZ</Link>
            </li>
            <li>
              <Link to="/">Used PORSCHE</Link>
            </li>
            <li>
              <Link to="/">Used TOYOTA</Link>
            </li>
            <li>
              <Link to="/">Used VOLKSWAGEN</Link>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default StocklistBottom;
