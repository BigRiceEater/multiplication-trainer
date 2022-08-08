import { createSlice } from "@reduxjs/toolkit";
import constants from "../../util/constants";

export const rangeSlice = createSlice({
  name: "range",
  initialState: {
    max: constants.absoluteMaxOperand,
    min: constants.absoluteMinOperand,
  },
  reducers: {
    setRange: (state, action) => {
      state.max = action.payload.max;
      state.min = action.payload.min;
    },
  },
});

export const { setRange } = rangeSlice.actions;

export default rangeSlice.reducer;
