import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGenresForSearch } from "../../services/search";

const initialState = {
  avaibleFilters: {
    genres: [],
    statuses: [
      { mal_id: 1, name: "airing" },
      { mal_id: 2, name: "complete" },
      { mal_id: 3, name: "upcoming" },
    ],
    types: [
      { mal_id: 1, name: "tv" },
      { mal_id: 2, name: "movie" },
      { mal_id: 3, name: "ova" },
      { mal_id: 4, name: "special" },
      { mal_id: 5, name: "ona" },
      { mal_id: 6, name: "music" },
    ],
    ratings: [
      { mal_id: 1, name: "g" },
      { mal_id: 2, name: "pg" },
      { mal_id: 3, name: "pg13" },
      { mal_id: 4, name: "r17" },
      { mal_id: 5, name: "r" },
    ],
  },
};

export const genres = createAsyncThunk("filters/get", async () => {
  const res = await getGenresForSearch();
  return res.data;
});

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  extraReducers: {
    [genres.fulfilled]: (state, action) => {
      state.avaibleFilters = {
        ...state.avaibleFilters,
        genres: action.payload,
      };
    },
  },
});

export default filtersSlice.reducer;
