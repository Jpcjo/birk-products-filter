import React from "react";
import {
  birk01,
  birk03,
  birk04,
  birk05,
  birk02,
  birk08,
  birk09,
  birk10,
} from "../utilis/productsData";

const images = [birk05, birk03, birk08, birk01, birk04, birk02, birk09, birk10];

const TopSlideShow = () => {
  return (
    <div className="flex max-w-screen h-[150px] overflow-x-scroll ">
      {images.map((img, index) => {
        return <img src={img} key={index} className="object-cover" />;
      })}
    </div>
  );
};

export default TopSlideShow;
