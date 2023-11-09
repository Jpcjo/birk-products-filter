import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeDropdown } from "../features/dropdownToggleSlice";

const texts = [
  "GET $20 WHEN YOU REFER A FRIEND.",
  "FREE SHIPPING*",
  "FAST DELIVERY",
  "FREE RETURN",
];

const TopSlide = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const isClose = () => {
    dispatch(closeDropdown()); // Close the dropdown
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + direction;
        if (nextSlide >= texts.length - 1 || nextSlide < 1) {
          setDirection(-direction); // Reverse direction at the ends
          return prevSlide + direction;
        }
        return nextSlide;
      });
    }, 6000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [direction]);

  return (
    <div
      className="relative w-screen  h-8 bg-gray-100 text-black overflow-hidden font-semibold uppercase "
      onClick={() => isClose()}
    >
      <div
        className="absolute top-0 left-0 w-full h-8 flex text-sm transition-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className="min-w-[100vw] h-8 text-xs flex items-center justify-center"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSlide;
