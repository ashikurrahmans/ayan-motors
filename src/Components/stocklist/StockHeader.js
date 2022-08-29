import React from "react";

const StockHeader = ({ title, imageurl }) => {
  return (
    <>
      <section
        Style={`background-image:url(${imageurl})`}
        className="py-16 bg-no-repeat bg-cover"
      >
        <div className="bg-black bg-opacity-70">
          <h1 className="w-10/12 mx-auto text-white font-bold text-2xl align-text-bottom">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default StockHeader;
