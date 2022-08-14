import React from "react";
import CarCondition from "./CarCondition";
import HeroSection from "./Heros/HeroSection";
import MotorDescription from "./MotorDescription/MotorDescription";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <MotorDescription></MotorDescription>
      <CarCondition></CarCondition>
    </>
  );
};

export default Home;
