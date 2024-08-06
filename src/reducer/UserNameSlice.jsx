import { createSlice } from "@reduxjs/toolkit";

const UserNameSlice = createSlice({
  name: "userName",
  initialState: {
    name: "",
  },
  reducers: {
    enterName: (state, action) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
  },
});

export const { enterName, clearName } = UserNameSlice.actions;

export default UserNameSlice.reducer;
