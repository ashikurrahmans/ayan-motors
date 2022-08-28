import React from "react";
import FooterContent from "./FooterContent";
import PoweredBy from "./PoweredBy";

const FooterBottom = () => {
  return (
    <>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full mx-auto lg:ml-12 md:ml-10 sm:ml-4">
        <div className="col-span-2">
          <FooterContent></FooterContent>
        </div>
        <PoweredBy></PoweredBy>
      </section>
    </>
  );
};

export default FooterBottom;
