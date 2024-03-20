import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Type from '../../types';

const initialState: Type.MapSliceState = {
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
  drawerSearchQuery: '',
  drawerPlaces: [],
};
const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setUserPosition: (state, action: PayloadAction<Type.Position>) => {
      state.userPosition.lat = action.payload.lat;
      state.userPosition.lng = action.payload.lng;
      state.userPosition.addressName = action.payload.addressName;
    },

    setFocusingPlace: (state, action: PayloadAction<Type.Place>) => {
      state.focusingPlace = action.payload;
    },

    setDrawerSearchQuery: (state, action: PayloadAction<string>) => {
      state.drawerSearchQuery = action.payload;
    },

    setDrawerPlaces: (state, action: PayloadAction<Type.IKakaoPlace[]>) => {
      state.drawerPlaces = action.payload;
    },
  },
});

export const { setUserPosition, setFocusingPlace, setDrawerPlaces, setDrawerSearchQuery } =
  mapSlice.actions;

export default mapSlice.reducer;
