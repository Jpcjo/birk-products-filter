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
      //   case 3:
      //     return <div className="bg-white text-black p-4">Repairs Dropdown</div>;
      //   case 4:
      //     return (
      //       <div className="bg-white text-black p-4">Sustainability Dropdown</div>
      //     );
      default:
        return null;
    }
  };

  return (
    <section className="w-screen bg-black h-[40px] relative lg:block">
      <div className="text-white text-sm tracking-widest h-full flex flex-row justify-center items-center space-x-3 ml-4 w-screen ">
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

// import React, { useState, useRef, useEffect } from "react";
// import { navbar } from "../utilis/productsData";
// import {
//   Case0Women,
//   Case1Men,
//   Case2Kids,
//   Case3UniSex,
// } from "../components/index";

// const NavBar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [leftOffset, setLeftOffset] = useState(0);
//   const [dropdownTimer, setDropdownTimer] = useState(null); // New state for delay timer
//   const navbarRef = useRef(null);

//   const calculateLeftOffset = (index) => {
//     const buttons = document.querySelectorAll(".navbar-button");
//     const offsetLeft = buttons[index].getBoundingClientRect().left;
//     setLeftOffset(offsetLeft);
//   };

//   const handleHover = (index) => {
//     clearTimeout(dropdownTimer); // Clear the delay timer
//     setActiveDropdown(index);
//     calculateLeftOffset(index);
//   };

//   const handleLeave = () => {
//     // Set a delay before hiding the dropdown
//     const timer = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 350); // Adjust the delay time as needed (200ms in this example)
//     setDropdownTimer(timer); // Store the timer in state
//   };

//   const handleDropdownHover = () => {
//     clearTimeout(dropdownTimer); // Clear the delay timer when hovering over the dropdown
//   };

//   const renderDropdownContent = (index) => {
//     switch (index) {
//       case 0:
//         return (
//           <div
//             className="bg-white text-black p-4 "
//             onMouseEnter={handleDropdownHover} // Handle hover on the dropdown itself
//           >
//             <Case0Women />
//           </div>
//         );
//       case 1:
//         return (
//           <div
//             className="bg-white text-black p-4"
//             onMouseEnter={handleDropdownHover}
//           >
//             <Case1Men />
//           </div>
//         );
//       case 2:
//         return (
//           <div
//             className="bg-white text-black p-4"
//             onMouseEnter={handleDropdownHover}
//           >
//             <Case2Kids />
//           </div>
//         );
//       //   case 3:
//       //     return <div className="bg-white text-black p-4">Repairs Dropdown</div>;
//       //   case 4:
//       //     return (
//       //       <div className="bg-white text-black p-4">Sustainability Dropdown</div>
//       //     );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="w-screen bg-black h-[40px] relative hidden lg:block">
//       <div className="text-white text-sm tracking-widest h-full flex flex-row justify-center items-center space-x-3 ml-4 w-screen ">
//         {navbar.map((nav, index) => (
//           <div
//             ref={navbarRef}
//             key={index}
//             className="relative group"
//             onMouseEnter={() => handleHover(index)}
//             onMouseLeave={handleLeave}
//           >
//             <button className="navbar-button p-3 hover:underline underline-offset-4  duration-300">
//               {nav}
//             </button>
//             {activeDropdown === index && (
//               <div
//                 className={`absolute w-screen top-full mt-[-4px] bg-white drop-shadow-xl z-[2000] `}
//                 style={{ left: -leftOffset + "px" }}
//                 onMouseEnter={handleDropdownHover}
//               >
//                 {renderDropdownContent(index)}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NavBar;
