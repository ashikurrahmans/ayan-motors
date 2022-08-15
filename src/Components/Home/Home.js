import React from "react";
import CarCondition from "./CarCondition";
import HeroSection from "./Heros/HeroSection";
import HomeSlider from "./HomeSlider/HomeSlider";
import MotorDescription from "./MotorDescription/MotorDescription";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <MotorDescription></MotorDescription>
      <CarCondition></CarCondition>
      <HomeSlider></HomeSlider>
    </>
  );
};

export default Home;
