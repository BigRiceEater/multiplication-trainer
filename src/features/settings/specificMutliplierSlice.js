import { createSlice } from "@reduxjs/toolkit";

export const specificMultiplierSlice = createSlice({
  name: "specificMultiplier",
  initialState: {
    checked: false,
    value: 1,
  },
  reducers: {
    toggle: (state) => {
      state.checked = !state.checked;
    },
    setMultiplierValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, setMultiplierValue } = specificMultiplierSlice.actions;

export default specificMultiplierSlice.reducer;
