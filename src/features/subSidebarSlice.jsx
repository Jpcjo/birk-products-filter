import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subWomenClicked: false,
};

const subSidebarSlice = createSlice({
  name: "subSidebar",
  initialState,
  reducers: {
    isSubWomenClicked: (state) => {
      state.subWomenClicked = !state.subWomenClicked;
    },
  },
});

export const { isSubWomenClicked } = subSidebarSlice.actions;

export default subSidebarSlice.reducer;
