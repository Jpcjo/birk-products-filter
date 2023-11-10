import React from "react";
import {
  birk01,
  birk03,
  birk04,
  birk05,
  birk02,
  birk08,
  birk09,
  birk10,
} from "../utilis/productsData";

const images = [birk05, birk03, birk08, birk01, birk04, birk02, birk09, birk10];

const TopSlideShow = () => {
  return (
    <div className="flex max-w-screen h-[150px] overflow-x-scroll ">
      {images.map((img, index) => {
        return <img src={img} key={index} className="object-cover" />;
      })}
    </div>
  );
};

export default TopSlideShow;

// import React, { useEffect, useState } from "react";
// import {
//   birk01,
//   birk03,
//   birk04,
//   birk05,
//   birk02,
//   birk08,
// } from "../utilis/productsData";

// const images = [birk05, birk03, birk08, birk01, birk04, birk02];

// const TopSlideShow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Calculate the index of the next image
//       const nextIndex = (currentIndex + 1) % images.length;
//       setCurrentIndex(nextIndex);
//     }, 6000); // Change image every 3 seconds (adjust this value as needed)

//     return () => {
//       clearInterval(interval); // Cleanup the interval when the component unmounts
//     };
//   }, [currentIndex]);

//   return (
//     <div className="w-screen h-[150px] overflow-hidden relative">
//       <div
//         className="w-full h-[100%] relative"
//         style={{
//           display: "flex",
//           width: `${images.length}00%`,
//           transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
//           transition: "transform 1s ease", // Adjust the duration as needed
//         }}
//       >
//         {images.map((img, index) => (
//           <img
//             src={img}
//             key={index}
//             className="w-screen h-[100%] object-cover"
//             alt={`Slide ${index}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopSlideShow;

// import React, { useState, useEffect } from "react";
// import {
//   birk01,
//   birk03,
//   birk04,
//   birk05,
//   birk02,
//   birk08,
// } from "../utilis/productsData";

// const images = [birk05, birk03, birk08, birk01, birk04, birk02];

// const TopSlideShow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Calculate the index of the next image
//       const nextIndex = (currentIndex + 1) % images.length;
//       setCurrentIndex(nextIndex);
//     }, 4000); // Change image every 3 seconds (adjust this value as needed)

//     return () => {
//       clearInterval(interval); // Cleanup the interval when the component unmounts
//     };
//   }, [currentIndex]);

//   return (
//     <div className="flex w-screen h-[180px] overflow-x-scroll">
//       {images.map((img, index) => {
//         return (
//           <img
//             src={img}
//             key={index}
//             className={`object-cover ${
//               index === currentIndex ? "block" : "hidden"
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default TopSlideShow;
