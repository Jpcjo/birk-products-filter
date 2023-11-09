import React, { useState } from "react";
import { subSidebar } from "../utilis/productsData";
import { RiArrowRightSLine } from "react-icons/ri";

const SubMen = () => {
  return (
    <div className="flex lg:hidden w-full">
      {/* Sidebar Menu */}

      <ul className="mt-6 flex flex-col space-y-3 w-full ">
        {subSidebar.map((section, index) => {
          return (
            <div
              className="flex flex-row justify-between items-start ml-4"
              key={index}
            >
              <li
                className={`text-black cursor-pointer hover:text-gray-400 pb-3 border-b  `}
                //   onClick={() => handleMenuItemClick(section)}
              >
                {section}
              </li>
              <RiArrowRightSLine className="w-6 h-6 text-gray-200" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMen;
