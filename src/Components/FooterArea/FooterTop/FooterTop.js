import React from "react";
import QuickNavLeft from "./QuickNavRight";
import QuickNavRight from "./QuickNavLeft";
import OpeningOur from "./OpeningOur";
import FooterContact from "./FooterContact";

const FooterTop = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div>
          <h1 className="text-white font-bold text-2xl mb-4 uppercase">
            Quick <span className="text-2xl text-white">Nav</span>
          </h1>
          <div className="flex gap-10">
            <QuickNavLeft></QuickNavLeft>
            <div>
              <QuickNavRight></QuickNavRight>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl mb-3">
            OPENING <span className="text-2xl text-white">HOURS</span>
          </h1>
          <OpeningOur></OpeningOur>
        </div>
        <div className="lg:ml-10 md:ml-10">
          <h1 className="text-white font-bold text-2xl mb-3">Contact US</h1>
          <FooterContact></FooterContact>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
