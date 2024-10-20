import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light", 
    },
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === "light") {
                state.theme = "dark";
            } else if (state.theme === "dark") {
                state.theme = "blue";
            } else {
                state.theme = "light"; 
            }
        },
        setTheme: (state, action) => {
            state.theme = action.payload; 
        },
    },
});


export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;