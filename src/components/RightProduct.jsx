import React from "react";
import {
  sandals,
  categories,
  colours,
  materials,
  occasions,
} from "../utilis/productsData";
import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  filteredTotalItems,
} from "../features/dropdownToggleSlice";

const RightProduct = () => {
  const dispatch = useDispatch();
  const {
    defaultOption,
    saleOnly,
    newArrivalOnly,
    minPrice,
    maxPrice,
    defaultCategory,
    defaultColour,
    defaultMaterial,
    defaultOccasion,
    totalItems,
  } = useSelector((state) => state.dropdownState);

  const productsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  let filteredProducts = [...sandals]; // Default to showing all products

  if (defaultOption === "Popularity") {
    filteredProducts = [...sandals];
  } else if (defaultOption === "New Arrivals") {
    filteredProducts = sandals.filter(
      (product) => product.newArrivalsOnly === true
    );
  } else if (defaultOption === "Price High To Low") {
    filteredProducts = filteredProducts.sort((a, b) => {
      const aPrice = a.salePrice || a.price;
      const bPrice = b.salePrice || b.price;
      return bPrice - aPrice;
    });
  } else if (defaultOption === "Price Low To High") {
    filteredProducts = filteredProducts.sort((a, b) => {
      const aPrice = a.salePrice || a.price;
      const bPrice = b.salePrice || b.price;
      return aPrice - bPrice;
    });
  } else if (defaultOption === "Sale") {
    filteredProducts = sandals.filter(
      (product) => product.salePrice !== undefined
    );
  }

  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

  if (!isNaN(min) && !isNaN(max)) {
    // Both min and max are provided
    if (min <= max) {
      // Filter products based on minPrice and maxPrice
      filteredProducts = filteredProducts.filter((product) => {
        const productPrice = product.salePrice || product.price;
        return productPrice >= min && productPrice <= max;
      });
    } else {
      alert("Maximum price should be greater than or equal to minimum price");
    }
  } else if (!isNaN(min)) {
    // Only min is provided
    filteredProducts = filteredProducts.filter((product) => {
      const productPrice = product.salePrice || product.price;
      return productPrice >= min;
    });
  } else if (!isNaN(max)) {
    // Only max is provided
    filteredProducts = filteredProducts.filter((product) => {
      const productPrice = product.salePrice || product.price;
      return productPrice <= max;
    });
  }

  if (defaultCategory === categories[0]) {
    filteredProducts;
  } else if (defaultCategory !== categories[0]) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === defaultCategory
    );
  }

  if (defaultColour === colours[0]) {
    filteredProducts;
  } else if (defaultColour !== colours[0]) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === defaultColour
    );
  }

  if (defaultMaterial === materials[0]) {
    filteredProducts;
  } else if (defaultMaterial !== materials[0]) {
    filteredProducts = filteredProducts.filter(
      (product) => product.material === defaultMaterial
    );
  }

  if (defaultOccasion === occasions[0]) {
    filteredProducts;
  } else if (defaultOccasion !== occasions[0]) {
    filteredProducts = filteredProducts.filter(
      (product) => product.occasion === defaultOccasion
    );
  }

  let newFilteredProducts = filteredProducts.slice(startIndex, endIndex);
  useEffect(() => {
    dispatch(filteredTotalItems(filteredProducts.length));
  }, [dispatch, filteredProducts, totalItems]);

  const totalPages = Math.ceil(totalItems / productsPerPage);

  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);
  }, [
    defaultOption,
    saleOnly,
    newArrivalOnly,
    defaultCategory,
    minPrice,
    maxPrice,
    defaultColour,
    defaultMaterial,
    defaultOccasion,
    totalItems,
  ]);

  useEffect(() => {
    setLoading(false); // set loading to false once newFilteredProducts is populated
  }, [newFilteredProducts]);

  const isClose = () => {
    dispatch(closeDropdown()); // Close the dropdown
  };

  const showPrevArrow = currentPage === 2 || totalPages === 1;
  const showNextArrow = currentPage === 1 || totalPages === 1;

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    window.scrollTo(0, 190);
  }, [currentPage]);

  return (
    <div className="w-screen lg:w-[73%] min-h-screen lg:ml-4">
      {/* Pagination */}
      <div className="flex  justify-end lg:justify-end  ">
        <h1 className="font-semibold text-2xl hidden mb-4 mt-2">
          Women's Birkenstock
        </h1>
        <div className="flex justify-end items-center h-[50px]">
          {showPrevArrow && totalPages > 1 && (
            <button
              className="px-1 py-2 mx-2 rounded hover:scale-[1.35] duration-300  text-gray-700"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <RiArrowLeftSLine />
            </button>
          )}
          {totalPages > 1 &&
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-1 py-2 mx-2 rounded hover:scale-[1.35] duration-300 ${
                  currentPage === index + 1 ? "text-gray-700" : " text-gray-400"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          {showNextArrow && totalPages > 1 && (
            <button
              className="px-1 py-2 mx-2 rounded  hover:scale-[1.35] duration-300  text-gray-700"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <RiArrowRightSLine />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4">
        {loading ? (
          <div className="font-semibold text-xl grid text-gray-600  ">
            Loading...
          </div>
        ) : newFilteredProducts.length === 0 ? (
          <div className="font-semibold text-xl grid text-gray-600  ">
            Sorry. No Result.
          </div>
        ) : (
          newFilteredProducts.map((sandal) => {
            const {
              brand,
              name,
              price,
              salePrice,
              image1,
              image2,
              moreColoursAvailable,
              newArrivalsOnly,
              id,
            } = sandal;

            return (
              <div
                key={id}
                className="bg-white rounded-sm overflow-hidden hover:shadow-md hover:scale-[1.01] duration-300"
              >
                {/* Product Image */}
                <img
                  src={hoveredCard === id ? image2 : image1}
                  alt={name}
                  className="w-full object-cover shadow-md"
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                />

                {/* Product Details */}
                <div className="mt-2 w-full">
                  <div className="text-md mb-1">{brand}</div>
                  <div className="text-sm text-gray-500 mb-1">{name}</div>
                  <div className="flex space-x-2">
                    <div
                      className={`text-gray-600 mb-1 font-bold ${
                        salePrice ? "line-through" : ""
                      }`}
                    >
                      ${price}.00
                    </div>
                    {salePrice ? (
                      <div className="text-orange-500 font-bold">
                        ${salePrice}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-orange-600 text-sm mb-1">
                    {salePrice ? "SALE" : ""}
                  </div>

                  {moreColoursAvailable && (
                    <div className="text-gray-400 text-sm">
                      More colours available
                    </div>
                  )}
                  {newArrivalsOnly && (
                    <div className="text-blue-400 font-semibold">New</div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Pagination */}
      <div className="flex  justify-end  ">
        <div className="flex justify-end items-center h-[50px]">
          {showPrevArrow && totalPages > 1 && (
            <button
              className="px-1 py-2 mx-2 rounded hover:scale-[1.35] duration-300  text-gray-700"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <RiArrowLeftSLine />
            </button>
          )}
          {totalPages > 1 &&
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-1 py-2 mx-2 rounded hover:scale-[1.35] duration-300 ${
                  currentPage === index + 1 ? "text-gray-700" : " text-gray-400"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          {showNextArrow && totalPages > 1 && (
            <button
              className="px-1 py-2 mx-2 rounded  hover:scale-[1.35] duration-300  text-gray-700"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <RiArrowRightSLine />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightProduct;
