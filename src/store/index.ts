import { configureStore } from '@reduxjs/toolkit';
import uisReducer from './features/uis/uisSlice';

const store = configureStore({
  reducer: {
    uis: uisReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
