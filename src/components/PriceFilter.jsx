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
  isError,
} from "../features/priceInputSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();

  const { minPriceInput, maxPriceInput, error } = useSelector(
    (state) => state.priceInputState
  );

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
        </div>
        {/* Display the error message */}
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
