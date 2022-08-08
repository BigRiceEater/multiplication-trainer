import { configureStore } from "@reduxjs/toolkit";
import specificMultiplierReducer from "./features/settings/specificMutliplierSlice";
import rangeReducer from "./features/settings/rangeSlice";

export default configureStore({
  reducer: {
    specificMultiplier: specificMultiplierReducer, // hidden magic; the property key has to be the same as the state name to work
    range: rangeReducer,
  },
});
