import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sidebarReducer from '../routes/home/components/sidebar/sideBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sideBar: sidebarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
