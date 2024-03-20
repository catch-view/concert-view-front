export type UiSliceState = {
  showAppSidebar: boolean;
  showSnackAlert: boolean;
  snackAlertMessage: string;
  snackAlertType: 'success' | 'info' | 'danger',
}

export type SetSnackInfoPayload = {
  message: string;
  type: 'success' | 'danger' | 'info';
};
