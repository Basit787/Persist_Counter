import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: (state) => {
      if(state.value < 33) {
      state.value = state.value + 1;}
    },
    decrementCounter: (state) => {
      if (state.value > 0) {
        state.value = state.value - 1;
      }
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  CounterSlice.actions;

export default CounterSlice.reducer;
