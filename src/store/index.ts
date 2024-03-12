import { configureStore } from '@reduxjs/toolkit';
import uisReducer from 'src/features/ui/redux/slice';
import mapReducer from 'src/features/map/redux/slice';

const store = configureStore({
  reducer: {
    uis: uisReducer,
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
