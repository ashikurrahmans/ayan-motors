import React from "react";
import { AiFillStar } from "react-icons/ai";

const SignleReviewCard = () => {
  const iconStyle = {
    color: "red",
    fontSize: "15px",
  };
  return (
    <div className="my-4">
      <div className="bg-[#666666] rounded-t flex justify-between">
        <div>
          <img
            src="https://assets.cardealer5.co.uk/superadmin_uploads/partnerlogos/pl_481.png"
            alt="autoTrader"
            className="w-24 h-12 ml-3"
          />
        </div>
        <div className="list-none flex items-center mr-3">
          <li>
            <AiFillStar style={iconStyle}></AiFillStar>
          </li>
          <li>
            <AiFillStar style={iconStyle}></AiFillStar>
          </li>
          <li>
            <AiFillStar style={iconStyle}></AiFillStar>
          </li>
          <li>
            <AiFillStar style={iconStyle}></AiFillStar>
          </li>
          <li>
            <AiFillStar style={iconStyle}></AiFillStar>
          </li>
        </div>
      </div>
      <div className="bg-[#444444] p-3 rounded-b">
        <h1 className="text-white text-lg capitalize font-bold">
          Great Cars, Great Service
        </h1>
        <p className="text-sm leading-tight">
          Really great experience from start to finish. Very pleased with the
          car which was exactly as described and negotiated a good price.
          Relaxed and friendly service throughout from genuinely nice guy. All
          detailing and paperwork taken care of and a great selection of quality
          vehicles. Highly recommended.
        </p>
        <div className="flex justify-end mt-1">
          <h3 className="text-white font-bold flex justify-end ">Matt W,</h3>
          <span className="text-[10px] ml-1"> 03 Jun 2019</span>
        </div>
      </div>
    </div>
  );
};

export default SignleReviewCard;
