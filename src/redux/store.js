import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filters";
import searchReducer from "./slices/search";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    search: searchReducer,
  },
});
