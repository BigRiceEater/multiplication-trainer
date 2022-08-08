import { createSlice } from "@reduxjs/toolkit";

export const specificMultiplierSlice = createSlice({
  name: "specificMultiplier",
  initialState: {
    checked: false,
  },
  reducers: {
    toggle: (state) => {
      state.checked = !state.checked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = specificMultiplierSlice.actions;

export default specificMultiplierSlice.reducer;
