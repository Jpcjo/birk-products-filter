import React from "react";
import { filtersTopContent } from "../utilis/productsData";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clickOutside,
  closeDropdown,
  selectedOption,
} from "../features/dropdownToggleSlice";

const TopContent = () => {
  const { isDropdownOpen, defaultOption, totalItems } = useSelector(
    (state) => state.dropdownState
  );
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const isOpen = () => {
    dispatch(clickOutside());
  };

  const handleSortChange = (option) => {
    dispatch(selectedOption(option));
    isClose(); // Close the dropdown

    // You can implement your sorting logic here based on the selected option
  };

  const isClose = () => {
    dispatch(closeDropdown()); // Close the dropdown
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // Second argument checks if the click occurred within the dropdown element
        // or any of its child elements.

        // If dropdownRef.current.contains(event.target) is true, it means the click
        // occurred inside the dropdown or its children, so there is no need to close
        // the dropdown because the user is interacting with it.

        // If dropdownRef.current.contains(event.target) is false, it means the click
        // occurred outside the dropdown, and that's when we want to close the dropdown.

        // So, this condition is used to determine whether the click event occurred inside
        // or outside the dropdown, and it helps in toggling the dropdown open or closed
        // accordingly.
        isClose();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div
      className="h-[50px] mx-8 py-8 sm:py-6 border-b flex items-center justify-between z-[1000]"
      //   onClick={() => isClose()}
    >
      <div className="text-xs sm:text-sm breadcrumbs  ">
        <ul>
          <li>
            <a>WOMEN</a>
          </li>
          <li>SHOES</li>
        </ul>
      </div>

      <div className="hidden lg:block text-xs text-gray-400">
        {totalItems} {totalItems < 2 ? "  ITEM" : "  ITEMS"}
      </div>

      <div
        className="relative inline-block text-left w-[110px] sm:w-[200px] z-[40] "
        ref={dropdownRef}
      >
        <div>
          <button
            type="button"
            className="inline-flex   justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 duration-200 focus:outline-none"
            onClick={() => isOpen()}
            aria-haspopup="listbox"
            // aria-expanded={isDropdownOpen}
          >
            {defaultOption}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isDropdownOpen && (
          <div className="  origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {filtersTopContent.map((option, index) => {
                return (
                  <a
                    key={index}
                    href="#"
                    className={`block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                      option === "Sale"
                        ? "text-red-500  hover:text-red-500 "
                        : ""
                    }${
                      option === "New Arrivals"
                        ? "text-sky-600  hover:text-sky-600 "
                        : ""
                    }`}
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                    {index === 0 ? "(default)" : ""}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopContent;
