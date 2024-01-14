import { configureStore } from '@reduxjs/toolkit';
import uisReducer from './features/uis/uisSlice';
import mapReducer from './features/map/mapSlice';

const store = configureStore({
  reducer: {
    uis: uisReducer,
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
