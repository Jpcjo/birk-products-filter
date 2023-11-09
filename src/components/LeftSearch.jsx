import React, { useState, useRef, useEffect } from "react";
import {
  filters,
  categories,
  colours,
  materials,
  occasions,
} from "../utilis/productsData";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  isSale,
  isNewArrival,
  selectedCategory,
  selectedColour,
  selectedMaterial,
  selectedOccasion,
  resetFilters,
} from "../features/dropdownToggleSlice";

import {
  resetPriceFilters,
  isClearAllBtnClicked,
  isError,
} from "../features/priceInputSlice";

import { PriceFilter } from "../components";

const LeftSearch = () => {
  const dispatch = useDispatch();
  const {
    saleOnly,
    newArrivalOnly,
    defaultCategory,
    defaultColour,
    defaultMaterial,
    defaultOccasion,
  } = useSelector((state) => state.dropdownState);

  const { error } = useSelector((state) => state.priceInputState);

  // console.log(newArrivalOnly);

  const [isResizing, setIsResizing] = useState(false);

  const handleSaleChange = () => {
    dispatch(isSale());
  };

  const handleNewArrivalChange = () => {
    dispatch(isNewArrival());
  };

  const handleCategoryChange = (category) => {
    dispatch(selectedCategory(category));
  };

  const handleColorChange = (e) => {
    dispatch(selectedColour(e.target.value));
  };

  const handleMaterialChange = (e) => {
    dispatch(selectedMaterial(e.target.value));
  };

  const handleOccasionChange = (e) => {
    dispatch(selectedOccasion(e.target.value));
  };

  const handleClearAll = () => {
    dispatch(isClearAllBtnClicked());
    dispatch(resetFilters());
    dispatch(resetPriceFilters());
    dispatch(isError(false));
    // Dispatch the resetFilters action to clear all filters
  };

  const [accordions, setAccordions] = useState(
    Array(filters.length).fill(false)
  );
  const [contentHeights, setContentHeights] = useState(
    Array(filters.length).fill(0)
  );

  const contentRefs = useRef(filters.map(() => React.createRef()));

  const toggleAccordion = (index) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion, i) => (i === index ? !accordion : false))
    );
  };

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  // Handle the end of resizing
  const handleResizeEnd = () => {
    setTimeout(() => {
      setIsResizing(false);
    }, 2000);
  };

  // Add event listeners for resizing
  useEffect(() => {
    window.addEventListener("resize", handleResizeStart);
    window.addEventListener("resize", handleResizeEnd);

    return () => {
      window.removeEventListener("resize", handleResizeStart);
      window.removeEventListener("resize", handleResizeEnd);
    };
  }, []);

  useEffect(() => {
    if (accordions.some((isOpen) => isOpen)) {
      //.some method is an array method that checks if at least one element in an array
      // meets a specified condition. If yes, returns true.
      // The some method is used to check if at least one element in the accordions array
      // is true. if isOpen = false, return false, if isOpen = true, return true, then
      // if(true), then the following code proceed

      // Measure the height of visible content
      const newHeights = contentRefs.current.map((ref, index) => {
        return ref.current ? ref.current.offsetHeight : 0;
      });
      setContentHeights(newHeights);
    }
  }, [accordions, error]);

  //   useEffect(() => {
  //     // Scroll to the "Category" section when the component mounts or when refreshed
  //     if (window.location.hash === "") {
  //       // Scroll to the "Category" section if no hash is present
  //       const categorySection = document.getElementById("category-section");
  //       if (categorySection) {
  //         const offset = categorySection.offsetTop;
  //         window.scrollTo({ top: offset, behavior: "smooth" });
  //       }
  //     }
  //   }, []);

  //   useEffect(() => {
  //     // Check if the scrollbar is at the bottom
  //     const isScrollAtBottom =
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

  //     if (isScrollAtBottom) {
  //       // If at the bottom, scroll to the Category section
  //       const categorySection = document.getElementById("category-section");
  //       if (categorySection) {
  //         const offset = categorySection.offsetTop;
  //         window.scrollTo({ top: offset, behavior: "smooth" });
  //       }
  //     }
  //   }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`hidden lg:block w-[27%] h-screen flex-col sticky top-[-45px] overflow-x-hidden ${
        isResizing ? " overflow-hidden" : "overflow-y-scroll"
      }`}
    >
      <h1 className="font-semibold lg:text-xl xl:text-2xl mb-4 mt-2">
        Women's Birkenstock Shoes
      </h1>
      <div className="mr-2 ml-2 flex flex-col space-y-4 items-start text-gray-400 text-sm">
        <h2
          className="py-2 border-y text-gray-600 text-lg w-full"
          //   id="category-section"
        >
          Category
        </h2>
        {categories.map((category, categoryIndex) => {
          return (
            <button
              className={`hover:text-gray-600 duration-300 ${
                category === defaultCategory
                  ? "text-gray-600 font-semibold"
                  : ""
              }`}
              key={categoryIndex}
              onClick={
                (() => handleCategoryChange(category),
                () => handleAccordionToggle())
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <section className="flex flex-col mt-6 ml-2 mr-4">
        <div className="flex justify-between border-b pb-4">
          <h3> Filter</h3>
          <button
            className="text-sm text-gray-400 underline"
            onClick={handleClearAll}
          >
            Clear all
          </button>
        </div>

        {/* accordins */}
        <section className="mb-4 w-full">
          {/* <div className="form-control">
            <label className="label cursor-pointer py-3 px-0 border-b">
              <span className="label-text text-base  text-gray-500 ">
                Sale Only
              </span>
              <input
                type="checkbox"
                className="toggle toggle-sm"
                onChange={handleSaleChange}
              />
            </label>
            <label className="label cursor-pointer  py-3 px-0 border-b">
              <span className="label-text text-base  text-gray-500  ">
                New Arrivals Only
              </span>
              <input
                type="checkbox"
                className="toggle toggle-sm"
                onChange={handleNewArrivalChange}
              />
            </label>
          </div> */}
          {accordions.map((isOpen, index) => (
            <div key={index} className="relative rounded-lg">
              <button
                className="w-full py-2 flex justify-between text-left border-b text-base  text-gray-500   "
                onClick={() => toggleAccordion(index)}
              >
                {filters[index]}

                <IoIosArrowDown
                  className={`h-6 w-6 transform ${
                    isOpen
                      ? "transition rotate-[180deg]  duration-300 text-red-700"
                      : "transition rotate-0 duration-300"
                  } `}
                />
              </button>

              <div
                style={{
                  maxHeight: isOpen ? contentHeights[index] + "px" : "0",
                  marginTop: isOpen ? "25px" : "0px",
                  marginBottom: isOpen ? "25px" : "0px",
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s ease-in-out, margin-top 0.4s ease-in-out, margin-bottom 0.4s ease-in-out",
                }}
                className={` max-w-[75%] mx-auto overflow-hidden`}
              >
                {/* {filters[index].content} */}
                {/* price */}
                <div ref={contentRefs.current[index]}>
                  {index === 0 && <PriceFilter />}

                  {/* colour */}
                  {index === 1 && (
                    <div className="flex flex-row items-center space-x-12 leading-7">
                      <div className="w-[100%]">
                        {colours.map((colour, colourIndex) => {
                          return (
                            <div
                              key={colourIndex}
                              className="flex flex-col items-start"
                            >
                              <div className="flex items-center space-x-2  mb-4">
                                <input
                                  type="radio"
                                  className="radio radio-xs"
                                  id={`colour-${colourIndex}`}
                                  name="radio-1"
                                  value={colour}
                                  checked={defaultColour === colour}
                                  onChange={handleColorChange}
                                  // Add an onChange handler here if you want to handle the radio button selection
                                />
                                <label
                                  className="text-gray-500 text-sm capitalize font-thin "
                                  htmlFor={`colour-${colourIndex}`}
                                >
                                  {colour}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* material */}
                  {index === 2 && (
                    <div className="flex flex-row items-center space-x-12 leading-7">
                      <div className="w-[100%]">
                        {materials.map((material, materialIndex) => {
                          return (
                            <div
                              key={materialIndex}
                              className="flex flex-col items-start"
                            >
                              <div className="flex items-center space-x-2  mb-4">
                                <input
                                  type="radio"
                                  className="radio radio-xs"
                                  id={`material-${materialIndex}`}
                                  name="radio-2"
                                  value={material}
                                  checked={defaultMaterial === material}
                                  onChange={handleMaterialChange}
                                  // Add an onChange handler here if you want to handle the radio button selection
                                />
                                <label
                                  className="text-gray-500 text-sm capitalize font-thin "
                                  htmlFor={`material-${materialIndex}`}
                                >
                                  {material}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* occasion */}
                  {index === 3 && (
                    <div className="flex flex-row items-center space-x-12 leading-7">
                      <div className="w-[100%]">
                        {occasions.map((occasion, occasionIndex) => {
                          return (
                            <div
                              key={occasionIndex}
                              className="flex flex-col items-start"
                            >
                              <div className="flex items-center space-x-2  mb-4">
                                <input
                                  type="radio"
                                  className="radio radio-xs"
                                  id={`occasion-${occasionIndex}`}
                                  name="radio-3"
                                  value={occasion}
                                  checked={defaultOccasion === occasion}
                                  onChange={handleOccasionChange}
                                  // Add an onChange handler here if you want to handle the radio button selection
                                />
                                <label
                                  className="text-gray-500 text-sm capitalize font-thin "
                                  htmlFor={`occasion-${occasionIndex}`}
                                >
                                  {occasion}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default LeftSearch;
