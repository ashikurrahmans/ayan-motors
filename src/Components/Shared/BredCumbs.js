import React from "react";

const BredCumbs = ({ title, imageurl }) => {
  return (
    <>
      <section
        Style={`background-image:url(${imageurl})`}
        className="py-16 bg-no-repeat bg-cover"
      >
        <div className="bg-black bg-opacity-70">
          <h1 className="text-white font-bold text-2xl text-center ">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default BredCumbs;
