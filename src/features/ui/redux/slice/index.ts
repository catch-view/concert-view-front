import { createSlice } from '@reduxjs/toolkit';
import { layoutState, layoutSlice } from './layout';
import { modalState, modalSlice } from './modal';
import { snackAlertState, snackAlertSlice } from './snackAlert';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    ...layoutState,
    ...snackAlertState,
    ...modalState,
  },

  reducers: {
    ...layoutSlice,
    ...snackAlertSlice,
    ...modalSlice,
  },
});

export const {
  toggleShowAppSidebar,
  setSnackInfo,
  setModalType,
  toggleShowModal,
} = uiSlice.actions;

export default uiSlice.reducer;
