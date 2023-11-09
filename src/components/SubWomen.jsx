import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subSidebar } from "../utilis/productsData";
import { SideBar } from "../components/index";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { isSubWomenClicked } from "../features/subSidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { isSidebarToggle } from "../features/dropdownToggleSlice";

const SubWomen = () => {
  const dispatch = useDispatch();
  const { subWomenClicked } = useSelector((state) => state.subSidebarState);
  const { sidebarToggle } = useSelector((state) => state.dropdownState);

  const clickToGoBack = () => {
    dispatch(isSubWomenClicked());
  };

  const toggleSidebar = () => {
    dispatch(isSidebarToggle());
  };

  return (
    <ul
      className={`flex flex-col space-y-3 w-full transform duration-500 ease-in-out 
        
      `}
    >
      {!subWomenClicked ? (
        ""
      ) : (
        <>
          <div className="flex justify-end">
            <AiOutlineClose
              className={`text-gray-500 text-xl duration-300 hover:scale-110 mb-3 ${
                sidebarToggle ? "block" : "hidden"
              }`}
              onClick={toggleSidebar}
            />
          </div>
          <button
            className="flex pb-3 items-center  border-b "
            onClick={clickToGoBack}
          >
            <RiArrowLeftSLine />
            <div className=" font-semibold ">WOMEN</div>
          </button>
        </>
      )}

      {!subWomenClicked ? (
        <SideBar />
      ) : (
        subSidebar.map((section, index) => {
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
        })
      )}
    </ul>
  );
};

export default SubWomen;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { subSidebar } from "../utilis/productsData";
// import { SideBar } from "../components/index";
// import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
// import { isSubWomenClicked } from "../features/subSidebarSlice";
// import { AiOutlineClose } from "react-icons/ai";
// import { isSidebarToggle } from "../features/dropdownToggleSlice";

// const SubWomen = () => {
//   const dispatch = useDispatch();
//   const { subWomenClicked } = useSelector((state) => state.subSidebarState);
//   const { sidebarToggle } = useSelector((state) => state.dropdownState);

//   const clickToGoBack = () => {
//     dispatch(isSubWomenClicked());
//   };

//   const toggleSidebar = () => {
//     dispatch(isSidebarToggle());
//   };

//   return (
//     <ul className=" flex flex-col space-y-3 w-full ">
//       {!subWomenClicked ? (
//         ""
//       ) : (
//         <>
//           <div className="flex justify-end">
//             <AiOutlineClose
//               className={`text-gray-500 text-xl duration-300 hover:scale-110 mb-3 ${
//                 sidebarToggle ? "block" : "hidden"
//               }`}
//               onClick={toggleSidebar}
//             />
//           </div>
//           <button
//             className="flex pb-3 items-center  border-b "
//             onClick={clickToGoBack}
//           >
//             <RiArrowLeftSLine />
//             <div className=" font-semibold ">WOMEN</div>
//           </button>
//         </>
//       )}

//       {!subWomenClicked ? (
//         <SideBar />
//       ) : (
//         subSidebar.map((section, index) => {
//           return (
//             <div
//               className="flex flex-row justify-between items-start ml-4"
//               key={index}
//             >
//               <li
//                 className={`text-black cursor-pointer hover:text-gray-400 pb-3 border-b  `}
//                 //   onClick={() => handleMenuItemClick(section)}
//               >
//                 {section}
//               </li>
//               <RiArrowRightSLine className="w-6 h-6 text-gray-200" />
//             </div>
//           );
//         })
//       )}
//     </ul>
//   );
// };

// export default SubWomen;
