import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { data } from './tasks-data';

interface Task {
    id: number;
    translationStatus: string;
}

interface TaskList extends Array<Task>{}

interface TasksState {
    tasks: TaskList
    selectedTasks: TaskList
} 

//TODO: you also need to store selectedPages in this slice so that you can access them from the action bar

const initialState: TasksState = {
    tasks: data,
    selectedTasks: []
}

export const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setSelectedTasks: (state, action:PayloadAction<TaskList>) => {
            state.selectedTasks = action.payload;
        },
        addSelectedTask: (state, action:PayloadAction<Task>) => {
            state.selectedTasks.push(action.payload);
        },
        removeSelectedTask: (state, action:PayloadAction<Task>) => {
            const index = state.selectedTasks.findIndex(t => action.payload.id === t.id);
            state.selectedTasks.splice(index, 1);
        }
    }
});

export const { setSelectedTasks, addSelectedTask, removeSelectedTask } = TasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectSelectedTasks = (state: RootState) => state.tasks.selectedTasks;

export default TasksSlice.reducer;