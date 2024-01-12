import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const uisSlice = createSlice({
  name: 'uis',
  initialState: {
    showAppSidebar: false,
  },

  reducers: {
    toggleShowAppSidebar: (state, action: PayloadAction<boolean>) => {
      state.showAppSidebar = action.payload;
    },
  },
});

export const { toggleShowAppSidebar } = uisSlice.actions;

export default uisSlice.reducer;
