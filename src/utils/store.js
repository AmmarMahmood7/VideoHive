import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        nav: navigationSlice,
        search: searchSlice,
    }
})
export default store;