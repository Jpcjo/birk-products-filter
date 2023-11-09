import React, { useState, useRef, useEffect } from "react";
import { SideBar } from "../components";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isSidebarToggle } from "../features/dropdownToggleSlice";

const TopBrand = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((state) => state.dropdownState);

  const toggleSidebar = () => {
    dispatch(isSidebarToggle());
  };
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen  bg-black h-[48px] flex items-center justify-center  sticky top-0 z-[2000] 
      `}
    >
      <div className={`fixed top-2 left-4 lg:hidden `} onClick={toggleSidebar}>
        <RxHamburgerMenu
          className={`text-white text-3xl duration-300 hover:scale-110 ${
            sidebarToggle ? "hidden" : "block"
          }`}
        />
        {/* <AiOutlineClose
          className={`text-white text-3xl  ${
            sidebarToggle ? "block" : "hidden"
          }`}
        /> */}
      </div>

      <div
        className={`fixed top-0 left-0 bg-white h-full w-[300px] p-4 transition z-[3000] ${
          sidebarToggle
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } duration-500 ease-in-out `}
      >
        {sidebarToggle ? <SideBar /> : ""}
      </div>

      <h1
        className={`text-white text-3xl font-extrabold tracking-widest transition-transform duration-300   ml-4 ${
          isScrolled ? "transform scale-75" : ""
        }`}
      >
        THE BIRK.
      </h1>
    </div>
  );
};

export default TopBrand;
