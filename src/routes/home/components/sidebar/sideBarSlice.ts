import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
    isExpanded: boolean
}

const initialState: SideBarState = {
    isExpanded: false
}

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isExpanded = !state.isExpanded
        }
    }
});

export const { toggle } = sideBarSlice.actions;

export default sideBarSlice.reducer;