import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import {
  filtersTopContent,
  categories,
  colours,
  materials,
  occasions,
  filtersSmallScreen,
} from "../utilis/productsData";

const initialState = {
  isDropdownOpen: false,
  defaultOption: filtersTopContent[0],
  saleOnly: false,
  newArrivalOnly: false,
  priceSearchClick: false,
  minPrice: "",
  maxPrice: "",
  defaultCategory: categories[0],
  defaultColour: colours[0],
  defaultMaterial: materials[0],
  defaultOccasion: occasions[0],
  totalItems: 48,
  accordionToggle: false,
  smallAccordionToggle: false,
  contentHeight: Array(filtersSmallScreen.length).fill(0),
  sidebarToggle: false,
};

const dropdownToggleSlice = createSlice({
  name: "dropdwonToggleSlice",
  initialState: initialState,
  reducers: {
    clickOutside: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    isSale: (state) => {
      state.saleOnly = !state.saleOnly;
    },
    isNewArrival: (state) => {
      state.newArrivalOnly = !state.newArrivalOnly;
    },

    isPriceSearchClicked: (state) => {
      state.priceSearchClick = !state.priceSearchClick;
    },
    isMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    isMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    selectedCategory: (state, action) => {
      state.defaultCategory = action.payload;
    },
    selectedOption: (state, action) => {
      state.defaultOption = action.payload;
    },
    selectedColour: (state, action) => {
      state.defaultColour = action.payload;
    },
    selectedMaterial: (state, action) => {
      state.defaultMaterial = action.payload;
    },
    selectedOccasion: (state, action) => {
      state.defaultOccasion = action.payload;
    },
    resetFilters: (state) => {
      state.minPrice = "";
      state.maxPrice = "";
      state.defaultCategory = categories[0];
      state.defaultColour = colours[0];
      state.defaultMaterial = materials[0];
      state.defaultOccasion = occasions[0];
    },
    filteredTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    isAccordionToggled: (state) => {
      state.accordionToggle = !state.accordionToggle;
    },
    isSmallAccordionToggled: (state) => {
      state.smallAccordionToggle = !state.smallAccordionToggle;
    },
    individualContentHeight: (state, action) => {
      state.contentHeight = action.payload;
    },
    isSidebarToggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
  },
});

export const {
  clickOutside,
  closeDropdown,
  selectedOption,
  isSale,
  isNewArrival,
  isPriceSearchClicked,
  isMinPrice,
  isMaxPrice,
  selectedCategory,
  selectedColour,
  selectedMaterial,
  selectedOccasion,
  resetFilters,
  filteredTotalItems,
  isAccordionToggled,
  isSmallAccordionToggled,
  individualContentHeight,
  isSidebarToggle,
} = dropdownToggleSlice.actions;

export default dropdownToggleSlice.reducer;
