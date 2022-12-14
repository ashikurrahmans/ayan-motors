import React from "react";
import MotorDesRightBottom from "./MotorDesRightBottom";

const MotorDescriptionRight = () => {
  return (
    <>
      <section>
        <div className="flex -m-4 text-center lg:mt-8 md:mt-6 sm:mt-2 lg:w-[400px] md:w-[400px] md:mx-auto sm:w-[300px] sm:mx-auto">
          <div className="p-4 md:w-3/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-white">
              <h2 className="title-font font-medium text-3xl text-white uppercase">
                sunday
              </h2>
              <p className="leading-relaxed">09:00 - 17:30</p>
              <div className="py-14">
                <h2 className="font-bold text-7xl text-white">12</h2>
                <p className="leading-relaxed uppercase mt-4">
                  Vehicle in stock
                </p>
              </div>
            </div>
          </div>
        </div>
        <MotorDesRightBottom></MotorDesRightBottom>
      </section>
    </>
  );
};

export default MotorDescriptionRight;
