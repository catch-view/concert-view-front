import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiSliceState, SetSnackInfoPayload } from '../../types';

const initialState: UiSliceState = {
  showAppSidebar: false,
  showSnackAlert: false,
  snackAlertMessage: '',
  snackAlertType: 'success',
}

const uisSlice = createSlice({
  name: 'uis',
  initialState: initialState,

  reducers: {
    toggleShowAppSidebar: (state, action: PayloadAction<boolean>) => {
      state.showAppSidebar = action.payload;
    },
    setShowSnackAlert: (state, action: PayloadAction<boolean>) => {
      state.showSnackAlert = action.payload;
    },

    setSnackAlertInfo: (state, action: PayloadAction<SetSnackInfoPayload>) => {
      const { message, type } = action.payload;
      state.snackAlertMessage = message;
      state.snackAlertType = type;
    },
  },
});

export const { toggleShowAppSidebar, setShowSnackAlert, setSnackAlertInfo } =
  uisSlice.actions;

export default uisSlice.reducer;
