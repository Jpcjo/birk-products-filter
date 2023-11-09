import React from "react";
import { kidsNew, kidsSandals, kidsPopularStyle } from "../utilis/productsData";
import { kids01, kids02, kids03, kids04 } from "../utilis/productsData";
import { SideSlideShow } from "../components/index";

const images = [kids01, kids02, kids03, kids04];

const Case2Kids = () => {
  return (
    <div className="flex flex-row space-x-24 justify-between w-[96%] my-4 mx-auto">
      <section className="flex flex-col space-y-2 items-start">
        {kidsNew.map((newItem, index) => {
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
        {kidsSandals.map((Sandal, index) => {
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
        {kidsPopularStyle.map((PopularStyle, index) => {
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
        <h1 className="font-bold mb-4">Shop Kids' Shoes</h1>
        <button>
          <SideSlideShow images={images} />
        </button>
      </section>
    </div>
  );
};

export default Case2Kids;
