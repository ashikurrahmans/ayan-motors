import React from "react";
import SingleSlider from "./SingleSlider";

const Slides = () => {
  const slideContent = [
    {
      img: "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png",
      desc: "Transportation is vital for economic growth and globalization. Without it, travelers and cargoes are impossible to transport. Although different modes of transportation exist worldwide",
      name: "Ashiks",
    },
    {
      img: "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png",
      desc: "Transportation is vital for economic growth and globalization. Without it, travelers and cargoes are impossible to transport. Although different modes of transportation exist worldwide",
      name: "Ashiks",
    },
    {
      img: "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png",
      desc: "Transportation is vital for economic growth and globalization. Without it, travelers and cargoes are impossible to transport. Although different modes of transportation exist worldwide",
      name: "Ashiks",
    },
    {
      img: "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png",
      desc: "Transportation is vital for economic growth and globalization. Without it, travelers and cargoes are impossible to transport. Although different modes of transportation exist worldwide",
      name: "Ashiks",
    },
    {
      img: "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png",
      desc: "Transportation is vital for economic growth and globalization. Without it, travelers and cargoes are impossible to transport. Although different modes of transportation exist worldwide",
      name: "Ashiks",
    },
  ];
  return (
    <div>
      {slideContent.map((slider, index) => {
        return <SingleSlider slider={slider} key={index}></SingleSlider>;
      })}
    </div>
  );
};

export default Slides;
