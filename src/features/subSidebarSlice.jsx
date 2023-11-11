import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subWomenClicked: false,
};

const subSidebarSlice = createSlice({
  name: "subSidebar",
  initialState,
  reducers: {
    isSubWomenClicked: (state) => {
      state.subWomenClicked = true;
    },

    isSubWomenClosed: (state) => {
      state.subWomenClicked = false;
    },
  },
});

export const { isSubWomenClicked, isSubWomenClosed } = subSidebarSlice.actions;

export default subSidebarSlice.reducer;
