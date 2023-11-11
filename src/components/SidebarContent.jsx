import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isSidebarToggle } from "../features/dropdownToggleSlice";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { navbar } from "../utilis/productsData";
import { SidebarSubPage, SubMen, SubWomen, SubKids } from "../components/index";
import { isSubWomenClicked } from "../features/subSidebarSlice";

const SidebarContent = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((state) => state.dropdownState);
  const { subWomenClicked } = useSelector((state) => state.subSidebarState);
  const [isClicked, setIsClicked] = useState(false);

  //   console.log("SidebarContent", subWomenClicked);

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  console.log(activeMenuItem);

  const clickedSidebarItem = () => {
    setIsClicked(true);
  };

  const handleMenuItemClick = (menuItem) => {
    if (menuItem === "REPAIRS" || menuItem === "SUSTAINABILITY") {
      return; // Do nothing for "REPAIRS" and "SUSTAINABILITY"
    }
    setActiveMenuItem(menuItem);
    clickedSidebarItem();
    dispatch(isSubWomenClicked());
  };

  useEffect(() => {
    if (!subWomenClicked) {
      setIsClicked(false);
      setActiveMenuItem(null); // Reset activeMenuItem when subWomenClicked changes
    }
  }, [subWomenClicked]);

  return (
    <>
      <ul
        className={`mt-2 flex flex-col space-y-3 ${
          activeMenuItem === null ? "block" : "hidden"
        }`}
      >
        {navbar.map((section, index) => {
          return (
            <button
              className="flex flex-row justify-between items-start border-b"
              key={index}
              onClick={() => handleMenuItemClick(section)}
            >
              <li className="text-black cursor-pointer hover:text-gray-400 pb-3  ">
                {section}
              </li>
              <RiArrowRightSLine className="w-6 h-6 text-gray-300" />
            </button>
          );
        })}
      </ul>

      {/* {activeMenuItem && ( */}
      <div
        className={`transition-transform max-w-full transform duration-500 ease-in-out  ${
          isClicked ? " translate-x-0" : "translate-x-full"
        }`}
      >
        {activeMenuItem === "WOMEN" && <SubWomen />}
        {activeMenuItem === "MEN" && <SubMen />}
        {activeMenuItem === "KIDS" && <SubKids />}
      </div>
    </>
  );
};

export default SidebarContent;
