import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: [],
    jobCategory: "",
  },
  reducers: {},
});

export default favSlice.reducer;
