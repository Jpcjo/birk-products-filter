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

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    clickedSidebarItem();
    dispatch(isSubWomenClicked());
    // setFirstClick(firstClick + 1);
    // if (firstClick > 0) {
    //   dispatch(isSubWomenClicked());
    // }
    // Perform an action based on the selected menu item
    // For now, we'll just log the item clicked
    // console.log(`Clicked: ${menuItem}`);

    // Close the sidebar after clicking a menu item
  };

  return (
    <div className={`flex lg:hidden w-full overflow-x-hidden  `}>
      {/* Sidebar Menu */}

      <div className="w-full max-h-fit">
        <div className={`flex justify-end `}>
          <AiOutlineClose
            className={`text-gray-500 text-xl duration-300 hover:scale-110 mb-3 ${
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

// import React, { useState, useEffect } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { isSidebarToggle } from "../features/dropdownToggleSlice";
// import { AiOutlineClose } from "react-icons/ai";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { navbar } from "../utilis/productsData";
// import { SidebarSubPage, SubMen, SubWomen, SubKids } from "../components/index";
// import { isSubWomenClicked } from "../features/subSidebarSlice";

// const SideBar = () => {
//   const dispatch = useDispatch();
//   const { sidebarToggle } = useSelector((state) => state.dropdownState);
//   const { subWomenClicked } = useSelector((state) => state.subSidebarState);
//   const [isClicked, setIsClicked] = useState(false);
//   //   const [firstClick, setFirstClick] = useState(0);
//   // console.log(sidebarToggle);

//   const [activeMenuItem, setActiveMenuItem] = useState(null);

//   const toggleSidebar = () => {
//     dispatch(isSidebarToggle());
//   };

//   const clickedSidebarItem = () => {
//     setIsClicked(true);
//   };

//   const handleMenuItemClick = (menuItem) => {
//     setActiveMenuItem(menuItem);
//     clickedSidebarItem();
//     dispatch(isSubWomenClicked());
//     // setFirstClick(firstClick + 1);
//     // if (firstClick > 0) {
//     //   dispatch(isSubWomenClicked());
//     // }
//     // Perform an action based on the selected menu item
//     // For now, we'll just log the item clicked
//     // console.log(`Clicked: ${menuItem}`);

//     // Close the sidebar after clicking a menu item
//   };

//   return (
//     <div className={`flex lg:hidden w-full overflow-x-hidden  `}>
//       {/* Sidebar Menu */}

//       <div className="w-full max-h-fit">
//         <div
//           className={`flex justify-end ${
//             activeMenuItem === null ? "block" : "hidden"
//           }`}
//         >
//           <AiOutlineClose
//             className={`text-gray-500 text-xl duration-300 hover:scale-110 mb-3 ${
//               sidebarToggle ? "block" : "hidden"
//             }`}
//             onClick={toggleSidebar}
//           />
//         </div>

//         <ul
//           className={`mt-2 flex flex-col space-y-3 ${
//             activeMenuItem === null ? "block" : "hidden"
//           }`}
//         >
//           {navbar.map((section, index) => {
//             return (
//               <button
//                 className="flex flex-row justify-between items-start border-b"
//                 key={index}
//                 onClick={() => handleMenuItemClick(section)}
//               >
//                 <li className="text-black cursor-pointer hover:text-gray-400 pb-3  ">
//                   {section}
//                 </li>
//                 <RiArrowRightSLine className="w-6 h-6 text-gray-300" />
//               </button>
//             );
//           })}
//         </ul>

//         {/* {activeMenuItem && ( */}
//         <div
//           className={`transition-transform max-w-full transform duration-500 ease-in-out  ${
//             isClicked ? " translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {activeMenuItem === "WOMEN" && <SubWomen />}
//           {activeMenuItem === "MEN" && <SubMen />}
//           {activeMenuItem === "KIDS" && <SubKids />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
