import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../app/store";

interface DropdownOption {
    value: number,
    label: string
}

interface DropdownPayload {
    option: DropdownOption,
    name: string
}

interface SearchState {
    statuses: Array<DropdownOption>,
    selectedStatus: DropdownOption,
    contractors: Array<DropdownOption>,
    selectedContractor: DropdownOption,
    test: string
}

const statuses = [
    { value: 1, label: "New" },
    { value: 2, label: "In Progress" },
    { value: 3, label: "Completed" },
];
  
const contractors = [
    { value: -1, label: "All" },
    { value: 1, label: "Contractor 1" },
    { value: 2, label: "Contractor 2" },
];

const initialState: SearchState = {
    statuses,
    contractors,
    selectedStatus: statuses[0],
    selectedContractor: contractors[0],
    test: 'hello'
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleDropdownChange: (state, action:PayloadAction<DropdownPayload>) => {
            const { option, name } = action.payload;
            //workaround to make TS happy. to avoid having to check for key names. We are already checking
            //that name should be a string in DropdownPayload
            (state as any)[name] = option;
        }
    }
})

export const { handleDropdownChange } = searchSlice.actions;

export const selectStatuses = (state: RootState) => state.search.statuses;
export const selectSelectedStatus = (state: RootState) => state.search.selectedStatus;

export default searchSlice.reducer;

/* const handleResetFormFields = () => {
    setFormFields(defaultFormFields);
  }; */

/* const handleDropdownChange = (option, name) => {
    setFormFields({ ...formFields, [name]: option });
  }; */

//export const {  }

/* interface SideBarState {
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
            state.isExpanded = !state.isExpanded
        }
    }
});

export const { toggleExpanded } = sideBarSlice.actions;

export const selectIsExpanded = (state: RootState) => state.sideBar.isExpanded;

export default sideBarSlice.reducer; */