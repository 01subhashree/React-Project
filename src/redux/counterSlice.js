import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increament: (state) => {
      state.counter = state.counter + 1;
    },
    decreament: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;
