import React from "react";
import {
  case1New,
  case1Sandals,
  case1PopularStyle,
} from "../utilis/productsData";
import { men01, men02, men03, men04 } from "../utilis/productsData";
import { SideSlideShow } from "../components/index";

const images = [men01, men02, men03, men04];

const Case1Men = () => {
  return (
    <div className="flex flex-row space-x-24 justify-between w-[96%] my-4 mx-auto">
      <section className="flex flex-col space-y-2 items-start">
        {case1New.map((newItem, index) => {
          return (
            <button
              key={index}
              className={`${
                newItem === "New" ? "font-bold" : ""
              }  hover:text-gray-500 duration-300 hover:underline underline-offset-4 text-left`}
            >
              {newItem}
            </button>
          );
        })}
      </section>
      <section className="flex flex-col space-y-2 items-start">
        {case1Sandals.map((Sandal, index) => {
          return (
            <button
              key={index}
              className={`${
                Sandal === "Sandals" ? "font-bold" : ""
              }  hover:text-gray-500 duration-300 hover:underline underline-offset-4 text-left`}
            >
              {Sandal}
            </button>
          );
        })}
      </section>
      <section className="flex flex-col space-y-2 items-start">
        {case1PopularStyle.map((PopularStyle, index) => {
          return (
            <button
              key={index}
              className={`${
                PopularStyle === "Popular Styles" ? "font-bold" : ""
              }  hover:text-gray-500 duration-300 hover:underline underline-offset-4 text-left`}
            >
              {PopularStyle}
            </button>
          );
        })}
      </section>
      <section>
        <h1 className="font-bold mb-4">Shop Men's Footwear</h1>
        <button>
          <SideSlideShow images={images} />
        </button>
      </section>
    </div>
  );
};

export default Case1Men;
