import React from "react";
import {
  case0New,
  case0Sandals,
  case0PopularStyle,
} from "../utilis/productsData";
import { SideSlideShow } from "../components/index";
import { summer00, summer01, summer02, summer03 } from "../utilis/productsData";
const images = [summer00, summer01, summer02, summer03];

const Case0Women = () => {
  return (
    <div className="flex flex-row space-x-24 justify-between w-[96%] my-4 mx-auto">
      <section className="flex flex-col space-y-2 items-start">
        {case0New.map((newItem, index) => {
          return (
            <button
              key={index}
              className={`${
                newItem === "New" ? "font-bold" : ""
              } hover:text-gray-500 duration-300 hover:underline underline-offset-4 text-left `}
            >
              {newItem}
            </button>
          );
        })}
      </section>

      <section className="flex flex-col space-y-2 items-start">
        {case0Sandals.map((Sandal, index) => {
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
        {case0PopularStyle.map((PopularStyle, index) => {
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
        <h1 className="font-bold mb-4">Summer Essentials</h1>
        <button>
          <SideSlideShow images={images} />
        </button>
      </section>
    </div>
  );
};

export default Case0Women;
