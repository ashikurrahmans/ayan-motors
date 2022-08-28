import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <>
      <section className="bg-black text-white list-none py-12">
        <div className="w-10/12 mx-auto ">
          <FooterTop></FooterTop>
          <div className="my-4">
            <FooterMiddle></FooterMiddle>
          </div>
          <div>
            <FooterBottom></FooterBottom>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
