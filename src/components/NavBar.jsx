import React, { useState, useRef, useEffect } from "react";
import { navbar } from "../utilis/productsData";
import {
  Case0Women,
  Case1Men,
  Case2Kids,
  Case3UniSex,
} from "../components/index";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [leftOffset, setLeftOffset] = useState(0);
  const navbarRef = useRef(null);

  const calculateLeftOffset = (index) => {
    const buttons = document.querySelectorAll(".navbar-button");
    const offsetLeft = buttons[index].getBoundingClientRect().left;
    setLeftOffset(offsetLeft);
  };

  const handleClick = (index) => {
    if (activeDropdown === index) {
      // If the same button is clicked again, close the dropdown
      setActiveDropdown(null);
    } else {
      // Open the dropdown for the clicked button
      calculateLeftOffset(index);
      setActiveDropdown(index);
    }
  };

  const handleLeave = () => {
    // Clear the active dropdown on mouse leave
    setActiveDropdown(null);
  };

  const renderDropdownContent = (index) => {
    const stopPropagation = (e) => {
      e.stopPropagation();
    };
    switch (index) {
      case 0:
        return (
          <div className="bg-white text-black p-4" onClick={stopPropagation}>
            <Case0Women />
          </div>
        );
      case 1:
        return (
          <div className="bg-white text-black p-4" onClick={stopPropagation}>
            <Case1Men />
          </div>
        );
      case 2:
        return (
          <div className="bg-white text-black p-4" onClick={stopPropagation}>
            <Case2Kids />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="max-w-screen-[1281px] bg-black h-[40px] relative hidden lg:block ">
      <div className="text-white text-sm tracking-widest h-full flex flex-row justify-center items-center space-x-3 ml-4 max-w-full">
        {navbar.map((nav, index) => (
          <div
            ref={navbarRef}
            key={index}
            className="relative group"
            onClick={() => handleClick(index)}
            onMouseLeave={handleLeave}
          >
            <button className="navbar-button p-3 hover:underline underline-offset-4  duration-300">
              {nav}
            </button>
            {activeDropdown === index && (
              <div
                className={`absolute w-screen top-full mt-[-4px] bg-white drop-shadow-xl z-[2000] `}
                style={{ left: -leftOffset + "px" }}
              >
                {renderDropdownContent(index)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavBar;
