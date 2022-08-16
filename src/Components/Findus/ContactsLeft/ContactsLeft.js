import React from "react";
import OpeningOur from "../../FooterArea/FooterTop/OpeningOur";
import PhoneUs from "./PhoneUs";

const ContactsLeft = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 bg-black">
        <PhoneUs></PhoneUs>
        <div className="text-black text-2xl bg-white shadow-lg rounded p-7">
          <OpeningOur></OpeningOur>
        </div>
      </section>
    </>
  );
};

export default ContactsLeft;
