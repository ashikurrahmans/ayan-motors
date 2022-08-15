import React from "react";
import FooterContent from "./FooterContent";
import PoweredBy from "./PoweredBy";

const FooterBottom = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <FooterContent></FooterContent>
        </div>
        <PoweredBy></PoweredBy>
      </section>
    </>
  );
};

export default FooterBottom;
