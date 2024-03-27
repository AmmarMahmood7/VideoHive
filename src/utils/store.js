import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        nav: navigationSlice,
        search: searchSlice,
        chat: chatSlice,
    }
})
export default store;