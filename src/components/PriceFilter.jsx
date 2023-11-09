import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isMinPrice,
  isMaxPrice,
  isPriceSearchClicked,
} from "../features/dropdownToggleSlice";

import {
  setMinPriceInput,
  setMaxPriceInput,
  isClearAllBtnClicked,
  resetPriceFilters,
  isError,
} from "../features/priceInputSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { priceSearchClick, minPrice, maxPrice } = useSelector(
    (state) => state.dropdownState
  );

  const { minPriceInput, maxPriceInput, clearAllBtnClicked, error } =
    useSelector((state) => state.priceInputState);

  //   console.log(clearAllBtnClicked);

  const handleMinPriceChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
    dispatch(setMinPriceInput(sanitizedValue)); // Update the Redux state with sanitized value
    dispatch(isError(false));
  };

  const handleMaxPriceChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
    dispatch(setMaxPriceInput(sanitizedValue)); // Update the Redux state with sanitized value
    dispatch(isError(false));
  };

  const applyPriceFilter = () => {
    const minPriceValue = parseFloat(minPriceInput);
    const maxPriceValue = parseFloat(maxPriceInput);

    if (
      (isNaN(minPriceValue) && !isNaN(maxPriceValue)) || // Only max price specified
      (!isNaN(minPriceValue) && isNaN(maxPriceValue)) || // Only min price specified
      minPriceValue < maxPriceValue // Both min and max prices specified and min < max
    ) {
      dispatch(isError(false)); // Clear any previous error messages
      // Apply the price filter when the button is clicked
      dispatch(isMinPrice(minPriceValue));
      dispatch(isMaxPrice(maxPriceValue));
      dispatch(isPriceSearchClicked()); // Set searchClicked to true when search is clicked
    } else {
      // Show an error message below the input boxes
      dispatch(isError(true));
    }
  };

  const handleReset = () => {
    // Reset the filter and hide the reset button
    setMinPriceInput("");
    setMaxPriceInput("");
    dispatch(isMinPrice(""));
    dispatch(isMaxPrice(""));
    dispatch(isPriceSearchClicked()); // Reset searchClicked to false
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-row md:space-x-4 items-end md:space-y-0">
          <div className="flex flex-col">
            <label htmlFor="minPrice" className="text-sm font-semibold mb-2">
              Min
            </label>
            <input
              type="text"
              id="minPrice"
              className={`${
                error ? "border-red-500" : ""
              } w-[90%] p-2 border rounded focus:outline-none`}
              placeholder="$ 0"
              value={minPriceInput}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxPrice" className="text-sm font-semibold mb-2">
              Max
            </label>
            <input
              type="text"
              id="maxPrice"
              className={`${
                error ? "border-red-500" : ""
              } w-[90%] p-2 border rounded focus:outline-none`}
              placeholder="$ Any"
              value={maxPriceInput}
              onChange={handleMaxPriceChange}
            />
          </div>

          <button
            className={`text-sm focus:outline-none text-gray-500 underline ${
              error ? "text-gray-300" : ""
            }`}
            onClick={applyPriceFilter}
            disabled={error}
          >
            Search
          </button>

          {/* {priceSearchClick ? ( // Conditionally render the reset button
        <button
          className="text-black text-sm focus:outline-none"
          onClick={handleReset}
        >
          Reset
        </button>
      ) : (
        <button
          className="text-black text-sm focus:outline-none"
          onClick={applyPriceFilter}
        >
          Search
        </button>
      )} */}
        </div>
        {/* Display the error message */}
        {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2">
          Oops! Your inputs are incorrect.
        </div>
      )}
    </div>
  );
};

export default PriceFilter;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   isMinPrice,
//   isMaxPrice,
//   isPriceSearchClicked,
// } from "../features/dropdownToggleSlice";

// import {
//   setMinPriceInput,
//   setMaxPriceInput,
//   isClearAllBtnClicked,
// } from "../features/priceInputSlice";

// const PriceFilter = () => {
//   const dispatch = useDispatch();
//   const { priceSearchClick, minPrice, maxPrice } = useSelector(
//     (state) => state.dropdownState
//   );

//   const { minPriceInput, maxPriceInput, clearAllBtnClicked } = useSelector(
//     (state) => state.priceInputState
//   );

//   console.log(clearAllBtnClicked);

//   const handleMinPriceChange = (e) => {
//     dispatch(setMinPriceInput(e.target.value)); // Update the Redux state
//   };

//   const handleMaxPriceChange = (e) => {
//     dispatch(setMaxPriceInput(e.target.value)); // Update the Redux state
//   };

//   const applyPriceFilter = () => {
//     // Apply the price filter when the button is clicked
//     dispatch(isMinPrice(minPriceInput));
//     dispatch(isMaxPrice(maxPriceInput));
//     dispatch(isPriceSearchClicked()); // Set searchClicked to true when search is clicked
//   };

//   const handleReset = () => {
//     // Reset the filter and hide the reset button
//     setMinPriceInput("");
//     setMaxPriceInput("");
//     dispatch(isMinPrice(""));
//     dispatch(isMaxPrice(""));
//     dispatch(isPriceSearchClicked()); // Reset searchClicked to false
//   };

//   return (
//     <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:items-end md:space-y-0">
//       <div className="flex flex-col">
//         <label htmlFor="minPrice" className="text-sm font-semibold mb-2">
//           Min
//         </label>
//         <input
//           type="text"
//           id="minPrice"
//           className="w-full p-2 border rounded focus:outline-none"
//           placeholder="$ 0"
//           value={minPriceInput}
//           onChange={handleMinPriceChange}
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="maxPrice" className="text-sm font-semibold mb-2">
//           Max
//         </label>
//         <input
//           type="text"
//           id="maxPrice"
//           className="w-full p-2 border rounded focus:outline-none"
//           placeholder="$ Any"
//           value={maxPriceInput}
//           onChange={handleMaxPriceChange}
//         />
//       </div>

//       <button
//         className=" text-sm focus:outline-none text-gray-400 underline"
//         onClick={applyPriceFilter}
//       >
//         Search
//       </button>

//       {/* {priceSearchClick ? ( // Conditionally render the reset button
//         <button
//           className="text-black text-sm focus:outline-none"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       ) : (
//         <button
//           className="text-black text-sm focus:outline-none"
//           onClick={applyPriceFilter}
//         >
//           Search
//         </button>
//       )} */}
//     </div>
//   );
// };

// export default PriceFilter;
