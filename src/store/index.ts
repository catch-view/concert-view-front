import { configureStore } from '@reduxjs/toolkit';
import uiReducer from 'src/features/ui/redux/slice';
import mapReducer from 'src/features/map/redux/slice';
import postReducer from 'src/features/post/redux/slice';
import userReducer from 'src/features/user/redux/slice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    map: mapReducer,
    post: postReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
