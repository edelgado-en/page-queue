import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { data } from './tasks-data';

interface Task {
    id: number;
    translationStatus: string;
}

interface TaskList extends Array<Task>{}

interface TasksState {
    tasks: TaskList
} 

//TODO: you also need to store selectedPages in this slice so that you can access them from the action bar

const initialState: TasksState = {
    tasks: data
}

export const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        test: (state) => {

        }
    }
});

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default TasksSlice.reducer;