import { PayloadAction } from '@reduxjs/toolkit';
export type ModalState = {
  showModal: boolean;
  modalType: 'postDetail' | null;
}
export const modalState:ModalState = {
  showModal: false,
  modalType: null,
}

export const modalSlice = {
  toggleShowModal: (state:ModalState) => {
    state.showModal = !state.showModal;
  },

  setModalType: (state: ModalState, action: PayloadAction<'postDetail'>) => {
    state.modalType = action.payload;
  }
}