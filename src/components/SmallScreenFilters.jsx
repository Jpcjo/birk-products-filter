import React, { useState, useRef, useEffect } from "react";
import {
  filtersSmallScreen,
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
  isAccordionToggled,
  individualContentHeight,
} from "../features/dropdownToggleSlice";

import {
  resetPriceFilters,
  isClearAllBtnClicked,
  isError,
} from "../features/priceInputSlice";
import { PriceFilter } from ".";

const SmallScreenFilters = () => {
  const [isIndex, setIsIndex] = useState(0);
  const indexNum = (index) => {
    // Do something with the index value
    setIsIndex(index);
  };

  const dispatch = useDispatch();
  const {
    saleOnly,
    newArrivalOnly,
    defaultCategory,
    defaultColour,
    defaultMaterial,
    defaultOccasion,
    accordionToggle,
    contentHeight,
  } = useSelector((state) => state.dropdownState);

  const { error } = useSelector((state) => state.priceInputState);

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
    Array(filtersSmallScreen.length).fill(false)
  );

  const handleAccordionToggle = () => {
    dispatch(isAccordionToggled());
  };

  const contentRefs = useRef(filtersSmallScreen.map(() => React.createRef()));

  const toggleAccordion = (index) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion, i) => (i === index ? !accordion : false))
    );
    handleAccordionToggle();
  };

  useEffect(() => {
    if (accordions.some((isOpen) => isOpen)) {
      const newHeights = contentRefs.current.map((ref, index) => {
        return ref.current ? ref.current.offsetHeight : 0;
      });
      dispatch(individualContentHeight(newHeights));
    }
  }, [accordions, error]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={` w-screen flex-col sticky top-[0px] overflow-x-hidden lg:hidden z-[10] mx-auto max-w-[96%] bg-white `}
    >
      <section className="flex flex-col ml-2 mr-4">
        <div className="flex justify-center border-b pb-4">
          <button
            className="text-sm text-gray-400 underline"
            onClick={handleClearAll}
          >
            Clear all
          </button>
        </div>

        {/* accordins */}
        <section className="mb-4 w-full">
          {accordions.map((isOpen, index) => (
            <div key={index} className="relative rounded-lg">
              <button
                className="w-full py-2 flex justify-between text-left border-b text-base  text-gray-500   "
                onClick={() => {
                  toggleAccordion(index);
                }}
              >
                {filtersSmallScreen[index]}

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
                  maxHeight: isOpen ? contentHeight[index] + "px" : "0",
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
                  {index === 0 && (
                    <div className="mr-2 ml-2 flex flex-col space-y-4 items-start text-gray-400 text-sm">
                      {categories.map((category, categoryIndex) => {
                        return (
                          <button
                            className={`hover:text-gray-600 duration-300 ${
                              category === defaultCategory
                                ? "text-gray-600 font-semibold"
                                : ""
                            }`}
                            key={categoryIndex}
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {index === 1 && <PriceFilter />}

                  {/* colour */}
                  {index === 2 && (
                    <div className="flex flex-row items-center space-x-12 leading-7">
                      <div className="w-[100%]">
                        {colours.map((colour, colourIndex) => {
                          return (
                            <div
                              key={colourIndex}
                              className="flex flex-col items-start"
                            >
                              <div className="flex items-center space-x-2  mb-2">
                                <input
                                  type="radio"
                                  className="radio radio-xs"
                                  id={`colour-${colourIndex}`}
                                  name="radio-4"
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
                  {index === 3 && (
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
                                  name="radio-5"
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
                  {index === 4 && (
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
                                  name="radio-6"
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

export default SmallScreenFilters;
