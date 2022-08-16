import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <form>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-4 ">
          <input
            type="texttext"
            placeholder="FirstName*"
            className="py-3 px-3 rounded"
          />
          <input
            type="texttext"
            placeholder="LastName*"
            className="py-3 px-3 rounded"
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-4">
          <input
            type="text"
            placeholder="Telephone*"
            className="py-3 px-3 rounded"
          />
          <input
            type="email"
            placeholder="Email*"
            className="py-3 px-3 rounded"
          />
        </div>
        <div>
          <textarea
            name="message"
            id=""
            cols="90"
            rows="5"
            className="md:mr-[-120px]"
          ></textarea>

          <input type="checkbox" id="check" />
          <label
            className="text-gray-400 text-sm leading-tight ml-2"
            htmlFor="check"
          >
            Please click to give us consent to store your data and contact you
            about the product requested and our services in the future via phone
            and email. Please see our privacy policy here.
          </label>
        </div>

        <div className="my-4">
          <ReCAPTCHA sitekey="6Ld9RnwhAAAAAKyf3kF9nDhiyiJy2WlfsCOsMmFl" />
        </div>
        <Link
          to=""
          type="submit"
          className="p-4 bg-gray-500 text-white text-lg uppercase rounded"
        >
          Send enquiry
        </Link>
      </form>
    </>
  );
};

export default ContactForm;
