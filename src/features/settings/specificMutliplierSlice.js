import { createSlice } from "@reduxjs/toolkit";

export const specificMultiplierSlice = createSlice({
  name: "specificMultiplier",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => !state.value,
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = specificMultiplierSlice.actions;

export default specificMultiplierSlice.reducer;
