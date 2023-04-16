import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  id: number;
  query: string;
  isModal: boolean;
  isSkip: boolean;
}

const initialState: ModalState = {
  id: 1,
  query: '',
  isModal: false,
  isSkip: true,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isModal(state, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
    query(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    isSkip(state, action: PayloadAction<boolean>) {
      state.isSkip = action.payload;
    },
    identification(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default modalSlice.reducer;
