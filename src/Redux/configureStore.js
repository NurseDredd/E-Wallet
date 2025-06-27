import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './cardSlice';
import themeSlice from "./themeSlice";

let store = configureStore({
    reducer:{
        card:cardSlice,
        theme: themeSlice
    }
})

export default store