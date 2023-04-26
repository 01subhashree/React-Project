import { configureStore } from "@reduxjs/toolkit";
import alphabetReducer from "./buttonSlice";
const store = configureStore({
  reducer: {
    alphabet: alphabetReducer,
  },
});

export default store;
