import React, { useState, useRef, useEffect } from "react";
import SmallScreenFilters from "./SmallScreenFilters";
import { MdOutlineKeyboardArrowDown } from "react-icons/Md";
import { useDispatch, useSelector } from "react-redux";
import {
  isAccordionToggled,
  isSmallAccordionToggled,
  individualContentHeight,
} from "../features/dropdownToggleSlice";

const HideSmallFilter = () => {
  //   const [forceRerender, setForceRerender] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setForceRerender(true);
  //     }, 100);
  //   }, []);

  const dispatch = useDispatch();
  const { accordionToggle, smallAccordionToggle, contentHeight, totalItems } =
    useSelector((state) => state.dropdownState);

  const hideFilter = ["FILTER"];

  const [accordions, setAccordions] = useState(
    Array(hideFilter.length).fill(false)
  );
  const [contentHeights, setContentHeights] = useState(
    Array(hideFilter.length).fill(0)
  );

  const contentRefs = useRef(hideFilter.map(() => React.createRef()));

  const smallToggle = () => {
    dispatch(isSmallAccordionToggled());
  };

  const toggleAccordion = (index) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion, i) => (i === index ? !accordion : false))
    );
  };

  useEffect(() => {
    if (accordions.some((isOpen) => isOpen)) {
      const newHeights = contentRefs.current.map((ref) => {
        const ownHeight = ref.current ? ref.current.offsetHeight : 0;
        const contentFilterHeight = accordionToggle ? contentHeight[0] : 0;
        // console.log(contentHeight[0]);

        return ownHeight + 315;
      });
      setContentHeights(newHeights);
    }
  }, [accordions, accordionToggle, smallAccordionToggle, contentHeight]);

  //   useEffect(() => {
  //     if (accordions.some((isOpen) => isOpen)) {
  //       const newHeights = contentRefs.current.map((ref) => {
  //         return ref.current ? ref.current.offsetHeight : 0;
  //       });
  //       setContentHeights(newHeights);
  //     }
  //   }, [accordions, isAccordionToggled, isSmallAccordionToggled]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className={` w-screen overflow-y-scroll flex-col  sticky top-[0px] overflow-x-hidden  lg:hidden z-[10] mx-auto max-w-[96%] bg-white `}
    >
      <h1 className="font-semibold text-2xl  mt-2 ml-2">Women's Birkenstock</h1>
      <section className="flex  w-full mt-6 ">
        {/* accordins */}
        <section className="mb-4 w-full">
          {accordions.map((isOpen, index) => (
            <div key={index} className="relative rounded-lg  ">
              <button
                className="w-[99%] mx-auto  py-2 flex  justify-center items-center rounded-md bg-cyan-600 text-white   text-sm "
                onClick={() => {
                  toggleAccordion(index);
                }}
              >
                <div className="flex">
                  {hideFilter[index]} ({totalItems}
                  {totalItems < 2 ? "  ITEM" : "  ITEMS"})
                  <MdOutlineKeyboardArrowDown
                    className={`h-6 w-6 transform  ${
                      isOpen
                        ? "transition rotate-[180deg]  duration-300 "
                        : "transition rotate-0 duration-300"
                    } `}
                  />
                </div>
                {/* <div className="text-xs text-white">({totalItems} ITEMS)</div> */}
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
                  <SmallScreenFilters />
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default HideSmallFilter;
