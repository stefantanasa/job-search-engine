import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const getResult= createAsyncThunk(
  "search/getResult",
  async(url,thunkAPI)=>{
    try {
      let response =async fetch(url)
      if (response.ok){
        let data = await response.json()
      }
      
    } catch (error) {
      console.log("❌ There is an error: ", error)
    }
  }
)

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: [],
    jobCategory: "",
  },
  reducers: {},
});

export default searchSlice.reducer;
