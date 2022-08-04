import { configureStore } from "@reduxjs/toolkit";
import specificMultiplierReducer from "./features/settings/specificMutliplierSlice";

export default configureStore({
  reducer: {
    specificMultiplier: specificMultiplierReducer, // hidden magic; the property key has to be the same as the state name to work
  },
});
