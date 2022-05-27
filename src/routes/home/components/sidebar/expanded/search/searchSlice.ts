import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../app/store";
import { statuses, contractors,
     TATStatuses, flags, contentTypes,
      priorities, internalReviewers, requestedBy
} from './dropdown-data';

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
    TATStatuses: Array<DropdownOption>,
    selectedTATStatus: DropdownOption,
    flags: Array<DropdownOption>,
    selectedFlag: DropdownOption,
    contentTypes: Array<DropdownOption>
    selectedContentType: DropdownOption,
    priorities: Array<DropdownOption>
    selectedPriority: DropdownOption,
    internalReviewers: Array<DropdownOption>,
    selectedInternalReviewer: DropdownOption,
    requestedBy: Array<DropdownOption>,
    selectedRequestedBy: DropdownOption
}

const initialState: SearchState = {
    statuses,
    contractors,
    TATStatuses,
    flags,
    contentTypes,
    priorities,
    internalReviewers,
    requestedBy,
    selectedStatus: statuses[0],
    selectedContractor: contractors[0],
    selectedTATStatus: TATStatuses[0],
    selectedContentType: contentTypes[0],
    selectedPriority: priorities[0],
    selectedInternalReviewer: internalReviewers[0],
    selectedRequestedBy: requestedBy[0],
    selectedFlag: flags[0]
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
        },
        resetAllFields: (state) => {
            //state = initialState won't work because immer tracks mutations, and you are only doing one assignment
            return initialState;
        }
    }
})

export const { handleDropdownChange, resetAllFields } = searchSlice.actions;

export const selectStatuses = (state: RootState) => state.search.statuses;
export const selectContractors = (state: RootState) => state.search.contractors;
export const selectTATStatuses = (state: RootState) => state.search.TATStatuses;
export const selectFlags = (state: RootState) => state.search.flags;
export const selectContentTypes = (state: RootState) => state.search.contentTypes;
export const selectPriorities = (state: RootState) => state.search.priorities
export const selectInternalReviewers = (state: RootState) => state.search.internalReviewers;
export const selectRequestedBy = (state: RootState) => state.search.requestedBy;

export const selectedRequestedBy = (state: RootState) => state.search.selectedRequestedBy;
export const selectedInternalReviewer = (state: RootState) => state.search.selectedInternalReviewer;
export const selectedPriority = (state: RootState) => state.search.selectedPriority;
export const selectedContentType = (state: RootState) => state.search.selectedContentType;
export const selectedFlag = (state: RootState) => state.search.selectedFlag;
export const selectedTATStatus = (state: RootState) => state.search.selectedTATStatus; 
export const selectSelectedStatus = (state: RootState) => state.search.selectedStatus;
export const selectSelectedContractor = (state: RootState) => state.search.selectedContractor;

export default searchSlice.reducer;
