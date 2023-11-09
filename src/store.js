import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dropdownToggleReducer from "./features/dropdownToggleSlice";
import priceInputReducer from "./features/priceInputSlice";
import subSidebarReducer from "./features/subSidebarSlice";

const rootReducer = combineReducers({
  dropdownState: dropdownToggleReducer,
  priceInputState: priceInputReducer,
  subSidebarState: subSidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import dropdownToggleReducer from "./features/dropdownToggleSlice";

// export const store = configureStore({
//   reducer: {
//     dropdownState: dropdownToggleReducer,
//   },
// });
