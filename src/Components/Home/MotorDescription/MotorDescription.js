import React from "react";
import CompanySupporters from "./CompanySupporters";
import MotorDescriptionRight from "./MotorDescriptionRight";
import MotorDesRightBottom from "./MotorDesRightBottom";

const MotorDescription = () => {
  return (
    <>
      <section className="bg-[#111111]">
        <div className="flex justify-center ">
          <img
            className="h-24 w-50 my-12 "
            src="https://www.ayaanmotors.com/admin/uploaded_photos/site_logo.png?nc=1311"
            alt="Workflow"
          />
        </div>
        <div className="w-10/12 mx-auto">
          <h1 className="text-white text-3xl font-bold border-b-4 border-white rounded mb-3">
            YOUR SPORTS & PRESTIGE CAR SPECIALIST
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:mr-32 gap-20">
            <main className="text-gray-100 lg:py-12 md:py-10 sm:py-4 col-span-2">
              <p className="py-4">
                We are a well-established, passionate used car dealer
                specialising in the sale of sports & prestige vehicles based in
                West Bromwich, West Midlands.
              </p>
              <p className="py-4">
                Whether you’re at Ayaan Motors to buy something special or would
                just like to browse, we want to offer you a very personal level
                of service leaving you with a great impression. We will make the
                buying process as enjoyable as possible and find the best
                options to suit your needs. Our service will be designed around
                you in order to exceed your expectations, so you would want to
                come back.
              </p>
              <p className="py-4">
                If you would like to get any professional help to choose the
                best sports or prestige car for your requirements, you can trust
                our expert sales team because we will provide considered and
                impartial advice which is well-respected in the automotive
                industry. You can test drive your chosen model on some of the
                best driving roads in the UK, putting it to the test and forging
                the all-important bond between you and the car.
              </p>
              import MotorDescriptionRight from './MotorDescriptionRight';
              <p className="py-6">
                If you would like to upgrade from another prestige car, we can
                purchase your old model for a fair and accurate price. We are
                always looking for exceptional luxury and sports cars to add to
                our stock, so can offer both cash sales and part exchange
                against the value of a car in our existing range.
              </p>
              <p className="lg:py-6 md:py-4 sm:py-2">
                To speak to one of our specialist sales advisers about finance,
                and buying or selling a car, please complete the online enquiry
                form today or phone our dealership in West Bromwich, West
                Midlands.
              </p>
            </main>
            <MotorDescriptionRight></MotorDescriptionRight>
          </div>
        </div>
        <CompanySupporters></CompanySupporters>
      </section>
    </>
  );
};

export default MotorDescription;
