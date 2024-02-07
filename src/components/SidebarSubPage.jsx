import React, { useState } from "react";
import { navbar01 } from "../utilis/productsData";
import { RiArrowRightSLine } from "react-icons/ri";

const SidebarSubPage = () => {
  return (
    <div className="flex lg:hidden w-[300px]">
      {/* Sidebar Menu */}

      <ul className="mt-6 flex flex-col space-y-3  ">
        {navbar01.map((section, index) => {
          return (
            <div
              className="flex flex-row justify-between items-start"
              key={index}
            >
              <li
                className={`text-black cursor-pointer hover:text-gray-400 pb-3 border-b  `}
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

export default SidebarSubPage;
