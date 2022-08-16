import React from "react";
import BredCumbs from "../Shared/BredCumbs";
import GoogleMap from "./GoogleMap";
import ContactsLeft from "./ContactsLeft/ContactsLeft";
import ContactsRight from "./ContactsRight/ContactsRight";
import ContactForm from "./ContactsLeft/ContactForm";
import SignmeUp from "./SignmeUp";

const FindUsPage = () => {
  return (
    <>
      <section>
        <BredCumbs
          title="WARRANTY INFORMATION"
          imgurl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
        ></BredCumbs>
        <GoogleMap></GoogleMap>
        <div className="bg-black py-10 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-10/12 mx-auto ">
            <div className="col-span-2 bg-[#1B1B1B] py-6 px-6 border">
              <ContactsLeft></ContactsLeft>
              <div>
                <h1 className="text-white font-bold text-2xl my-4 ">
                  Contact us
                </h1>
                <ContactForm></ContactForm>
              </div>
            </div>
            <div>
              <ContactsRight></ContactsRight>
            </div>
          </div>
        </div>

        <SignmeUp></SignmeUp>
      </section>
    </>
  );
};

export default FindUsPage;
