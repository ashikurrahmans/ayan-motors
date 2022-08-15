import React from "react";
import RightHero from "./RightHero";
import SingleHero from "./SingleHero";

const HeroSection = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 mb-4 md:w-full md:mx-auto md:text-center">
        <SingleHero></SingleHero>
        <div>
          <div>
            <RightHero
              title="Thinking of Selling?"
              description="Competitive prices paid for your vehicle"
              buttonLink="#"
              bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
            ></RightHero>
            <div className="mt-4">
              <RightHero
                title="Warrenties Available"
                description="Derive away with complete peace of mind"
                buttonLink="#"
                bgImage="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
              ></RightHero>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
