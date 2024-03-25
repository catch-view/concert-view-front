import { PayloadAction } from '@reduxjs/toolkit';
export type LayoutState = {
  showAppSidebar: boolean;
}
export const layoutState:LayoutState = {
  showAppSidebar: false
}

export const layoutSlice = {
    toggleShowAppSidebar: (state:LayoutState, action: PayloadAction<boolean>) => {
      state.showAppSidebar = action.payload;
    },
}