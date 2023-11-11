import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subSidebar } from "../utilis/productsData";
import { SideBar, SidebarContent } from "../components/index";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import {
  isSubWomenClicked,
  isSubWomenClosed,
} from "../features/subSidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { isSidebarToggle } from "../features/dropdownToggleSlice";

const SubWomen = () => {
  const dispatch = useDispatch();
  const { subWomenClicked } = useSelector((state) => state.subSidebarState);
  const { sidebarToggle } = useSelector((state) => state.dropdownState);
  const [isClicked, setIsClicked] = useState(false);
  // console.log("SubWomen", subWomenClicked);
  console.log(isClicked);

  const clickToGoBack = () => {
    dispatch(isSubWomenClosed());
    setIsClicked(true);
  };

  return (
    <ul
      className={`flex flex-col space-y-3 w-full ${
        !subWomenClicked ? " translate-x-full" : " translate-x-0"
      } duration-500 ease-in-out transform`}
    >
      {/* {!subWomenClicked ? (
        <SidebarContent />
      ) : ( */}
      <>
        <button
          className={`flex pb-3 items-center  border-b`}
          onClick={clickToGoBack}
        >
          <RiArrowLeftSLine />
          <div className=" font-semibold ">WOMEN</div>
        </button>

        {subSidebar.map((section, index) => {
          return (
            <div
              className="flex flex-row justify-between items-start ml-4  border-b  "
              key={index}
            >
              <li
                className={`text-black cursor-pointer hover:text-gray-400 pb-3 `}
                //   onClick={() => handleMenuItemClick(section)}
              >
                {section}
              </li>
              <RiArrowRightSLine className="w-6 h-6 text-gray-200" />
            </div>
          );
        })}
      </>
      {/* )} */}
    </ul>
  );
};

export default SubWomen;
