import React, { useState, useEffect } from "react";

const SideSlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next image
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Change image every 3 seconds (adjust this value as needed)

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, [currentIndex]);

  return (
    <div className="flex w-full h-[180px] overflow-x-scroll">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            key={index}
            className={`object-cover w-[300px] ${
              index === currentIndex ? "block" : "hidden"
            }`}
          />
        );
      })}
    </div>
  );
};

export default SideSlideShow;
