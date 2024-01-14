import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPosition, IPlace } from './interface';

interface IMapSliceState {
  userPosition: IPosition;
  focusingPosition: IPosition;
  drawerPlaces: IPlace[];
}
const initialState: IMapSliceState = {
  userPosition: {
    lat: null,
    lng: null,
    addressName: '',
  },
  focusingPosition: {
    lat: null,
    lng: null,
    addressName: '',
  },
  drawerPlaces: [],
};
const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setUserPosition: (state, action: PayloadAction<IPosition>) => {
      state.userPosition.lat = action.payload.lat;
      state.userPosition.lng = action.payload.lng;
    },

    setFocusingPosition: (state, action: PayloadAction<IPosition>) => {
      state.focusingPosition.lat = action.payload.lat;
      state.focusingPosition.lng = action.payload.lng;
    },

    setDrawerPlaces: (state, action: PayloadAction<IPlace[]>) => {
      state.drawerPlaces = action.payload;
    },
  },
});

export const { setUserPosition, setFocusingPosition, setDrawerPlaces } =
  mapSlice.actions;

export default mapSlice.reducer;
