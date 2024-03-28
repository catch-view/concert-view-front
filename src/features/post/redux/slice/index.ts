import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState, ModalPost } from '../../types';

const initialState: PostSliceState = {
  modalPost: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,

  reducers: {
    setModalPost: (state, action: PayloadAction<ModalPost>) => {
      state.modalPost = action.payload;
    },
  },
});

export const { setModalPost } = postSlice.actions;

export default postSlice.reducer;
