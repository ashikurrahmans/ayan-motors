import React from "react";
import FooterMiddleDirections from "./FooterMiddleDirections";
import FooterMiddleImages from "./FooterMiddleImages";
import FooterMiddleSocial from "./FooterMiddleSocial";

const FooterMiddle = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <FooterMiddleImages></FooterMiddleImages>
          <FooterMiddleDirections></FooterMiddleDirections>
          <FooterMiddleSocial></FooterMiddleSocial>
        </div>
      </section>
    </>
  );
};

export default FooterMiddle;
