import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState, Post } from '../../types';

const initialState: PostSliceState = {
  modalPost: null,
}

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,

  reducers: {
    toggleShowPostDetailModal: (state, action: PayloadAction<Post>) => {
      state.modalPost =  action.payload;
    },
  },
});

export const { toggleShowPostDetailModal } =
  postSlice.actions;

export default postSlice.reducer;
