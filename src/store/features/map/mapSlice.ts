import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUserPositionPaylaod } from './interface';

interface IMapSliceState {
  userLat: number | null;
  userLng: number | null;
}
const initialState: IMapSliceState = {
  userLat: null,
  userLng: null,
};
const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setUserPosition: (
      state,
      action: PayloadAction<ISetUserPositionPaylaod>
    ) => {
      state.userLat = action.payload.userLat;
      state.userLng = action.payload.userLng;
    },
  },
});

export const { setUserPosition } = mapSlice.actions;

export default mapSlice.reducer;
