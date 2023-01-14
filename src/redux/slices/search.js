import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchAnime } from "../../services/search";

const initialState = {
  searchResult: [],
};

export const search = createAsyncThunk("search/result", async (filters) => {
  const res = await searchAnime(filters);
  return res;
});

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [search.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
      console.log(state.searchResult);
    },
  },
});

export default searchSlice.reducer;
