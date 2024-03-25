import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    ip: ''
  },

  reducers: {
    setIp: (state, action: PayloadAction<string>) => {
      state.ip = action.payload;
    }
  },
});

export const { setIp } =
  userSlice.actions;

export default userSlice.reducer;
