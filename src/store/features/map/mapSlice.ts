import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPosition, IPlace } from './interface';

interface IMapSliceState {
  userPosition: IPosition;
  focusingPlace: IPlace;
  drawerPlaces: IPlace[];
}
const initialState: IMapSliceState = {
  userPosition: {
    lat: null,
    lng: null,
    addressName: '',
  },
  focusingPlace: {
    addressName: '',
    categoryGroupCode: '',
    categoryGroupName: '',
    distance: '',
    id: '',
    phone: '',
    placeName: '',
    placeUrl: '',
    roadAddressName: '',
    lat: null,
    lng: null,
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

    setFocusingPlace: (state, action: PayloadAction<IPlace>) => {
      state.focusingPlace = action.payload;
    },

    setDrawerPlaces: (state, action: PayloadAction<IPlace[]>) => {
      state.drawerPlaces = action.payload;
    },
  },
});

export const { setUserPosition, setFocusingPlace, setDrawerPlaces } =
  mapSlice.actions;

export default mapSlice.reducer;
