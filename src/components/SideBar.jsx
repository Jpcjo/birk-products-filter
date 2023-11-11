import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isSidebarToggle } from "../features/dropdownToggleSlice";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { navbar } from "../utilis/productsData";
import {
  SidebarSubPage,
  SubMen,
  SubWomen,
  SubKids,
  SidebarContent,
} from "../components/index";
import { isSubWomenClicked } from "../features/subSidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((state) => state.dropdownState);
  const { subWomenClicked } = useSelector((state) => state.subSidebarState);
  const [isClicked, setIsClicked] = useState(false);
  //   const [firstClick, setFirstClick] = useState(0);
  // console.log(subWomenClicked);

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleSidebar = () => {
    dispatch(isSidebarToggle());
    dispatch(isSubWomenClicked(false));
  };

  const clickedSidebarItem = () => {
    setIsClicked(true);
  };

  // const handleMenuItemClick = (menuItem) => {
  //   setActiveMenuItem(menuItem);
  //   clickedSidebarItem();
  //   dispatch(isSubWomenClicked());
  // };

  return (
    <div className={`flex lg:hidden w-full overflow-x-hidden  `}>
      {/* Sidebar Menu */}

      <div className="w-full max-h-fit">
        <div className={`flex justify-end `}>
          <AiOutlineClose
            className={`text-gray-500 text-xl duration-300 hover:scale-110 mb-3  ${
              sidebarToggle ? "block" : "hidden"
            }`}
            onClick={toggleSidebar}
          />
        </div>

        <SidebarContent />
      </div>
    </div>
  );
};

export default SideBar;
