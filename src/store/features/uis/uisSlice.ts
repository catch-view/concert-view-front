import { createSlice } from '@reduxjs/toolkit';

const uisSlice = createSlice({
  name: 'uis',
  initialState: {
    showAppSidebar: true,
  },

  reducers: {
    toggleShowAppSidebar: (state) => {
      state.showAppSidebar = !state.showAppSidebar;
    },
  },
});

export const { toggleShowAppSidebar } = uisSlice.actions;

export default uisSlice.reducer;
