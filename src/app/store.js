import { configureStore } from "@reduxjs/toolkit";
import companySlice from "../slices/companySlice";
import favSlice from "../slices/favSlice";
import searchSlice from "../slices/searchSlice";

export default configureStore({
  reducer: {
    company: company,
  },
});
