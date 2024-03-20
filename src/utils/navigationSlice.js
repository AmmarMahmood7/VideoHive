import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: "navigation",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
})
export const { toggleMenu, closeMenu } = navigationSlice.actions;
export default navigationSlice.reducer;