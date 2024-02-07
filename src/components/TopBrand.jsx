import React, { useState, useRef, useEffect } from "react";
import { SideBar } from "../components";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isSidebarToggle } from "../features/dropdownToggleSlice";

const TopBrand = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((state) => state.dropdownState);
  const { subWomenClicked } = useSelector((state) => state.subSidebarState);

  const toggleSidebar = () => {
    dispatch(isSidebarToggle());
  };

  const [isScrolled, setIsScrolled] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    // Close the sidebar when the window is resized
    if (sidebarToggle) {
      dispatch(isSidebarToggle());
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once to initialize the state
    handleScroll();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarToggle, subWomenClicked]);

  useEffect(() => {
    const body = document.body;

    // Disable scrolling when the sidebar is open or sub-page is active
    if (sidebarToggle) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset"; // Re-enable scrolling
    }

    // Clean up
    return () => {
      body.style.overflow = "unset"; // Re-enable scrolling when the component unmounts
    };
  }, [sidebarToggle]);

  return (
    <div
      className={`max-w-screen  bg-black h-[48px] flex items-center justify-center sticky top-0 z-[2000] 
      `}
    >
      <div className={`fixed top-2 left-4 lg:hidden `} onClick={toggleSidebar}>
        <RxHamburgerMenu
          className={`text-white text-3xl duration-300 hover:scale-110 ${
            sidebarToggle ? "hidden" : "block"
          }`}
        />
      </div>

      <div
        className={`fixed top-0 left-0 bg-white h-full w-[290px] p-4 transition z-[3000] ${
          sidebarToggle
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } duration-500 ease-in-out `}
      >
        {sidebarToggle ? <SideBar /> : ""}
      </div>

      <div
        className={`fixed top-0 left-0 bg-gray-800 bg-opacity-50 h-full w-screen ${
          sidebarToggle ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

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
