import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sidebarReducer from '../routes/home/components/sidebar/sideBarSlice';
import tasksReducer from '../routes/home/components/tasks/tasksSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sideBar: sidebarReducer,
    tasks: tasksReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
