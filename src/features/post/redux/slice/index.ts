import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSliceState, ModalPost } from '../../types';

const initialState: PostSliceState = {
  modalPost: null,
  listMode: 'posts',
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,

  reducers: {
    setModalPost: (state, action: PayloadAction<ModalPost>) => {
      state.modalPost = action.payload;
    },

    setListMode: (state, action: PayloadAction<'posts' | 'images'>) => {
      state.listMode = action.payload;
    },
  },
});

export const { setModalPost, setListMode } = postSlice.actions;

export default postSlice.reducer;
