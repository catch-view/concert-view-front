import { PayloadAction } from '@reduxjs/toolkit';

export type SnackInfo = {
  showSnackAlert: boolean;
  snackAlertMessage: string;
  snackAlertType: 'success' | 'info' | 'danger',
}

export type SnackAlertState = {
  snackInfo: SnackInfo
}

export const snackAlertState: SnackAlertState = {
  snackInfo: { 
    showSnackAlert: false,
    snackAlertMessage: '',
    snackAlertType: 'info'
  }
}

export const snackAlertSlice = {
  setSnackInfo: (state: SnackAlertState, action: PayloadAction<SnackInfo>) => {
    state.snackInfo = action.payload;
  }
}