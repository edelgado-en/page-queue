import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../../../app/store';

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
        toggleExpanded: (state) => {
            console.log('sidebar slice');
            console.log(state);
            state.isExpanded = !state.isExpanded
        }
    }
});

export const { toggleExpanded } = sideBarSlice.actions;

export const selectIsExpanded = (state: RootState) => state.sideBar.isExpanded;

export default sideBarSlice.reducer;