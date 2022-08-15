import React from "react";
import { AiFillLock } from "react-icons/ai";

const FooterContent = () => {
  const iconStyle = {
    display: "inline-block",
  };
  return (
    <>
      <h2 className="text-[9px]">
        <AiFillLock style={iconStyle} />
        SSL secure. Please read our privacy policy
      </h2>
      <p className="text-[10px] mt-2">
        Ayaan Motors Limited are a credit broker and not a lender. We are
        Authorised and Regulated by the Financial Conduct Authority. FCA No:
        808833 Finance is Subject to status. Other offers may be available but
        cannot be used in conjunction with this offer. We work with a number of
        carefully selected credit providers who may be able to offer you finance
        for your purchase. Registered in England & Wales: 09342013
      </p>
      <p className="mt-1 text-[10px]">
        Registered Office: Address: Unit 3, Varney Business Park Unit 3, Varney
        Business Park, Varney Avenue, West Bromwich, West Midlands
      </p>
    </>
  );
};

export default FooterContent;
