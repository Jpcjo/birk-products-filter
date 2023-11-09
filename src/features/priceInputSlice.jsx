import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPriceInput: "",
  maxPriceInput: "",
  clearAllBtnClicked: false,
  error: "",
};

const priceInputSlice = createSlice({
  name: "priceInput",
  initialState,
  reducers: {
    setMinPriceInput: (state, action) => {
      state.minPriceInput = action.payload;
    },
    setMaxPriceInput: (state, action) => {
      state.maxPriceInput = action.payload;
    },
    resetPriceFilters: (state) => {
      state.minPriceInput = "";
      state.maxPriceInput = "";
    },
    isClearAllBtnClicked: (state) => {
      state.clearAllBtnClicked = true;
    },
    isError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMinPriceInput,
  setMaxPriceInput,
  resetPriceFilters,
  isClearAllBtnClicked,
  isError,
} = priceInputSlice.actions;

export default priceInputSlice.reducer;
