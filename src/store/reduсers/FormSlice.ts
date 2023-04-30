import { CardFormTypeSubmit } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  cards: CardFormTypeSubmit[];
  isCard: boolean;
}

const initialState: FormState = {
  cards: [],
  isCard: false,
};

export const formSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<CardFormTypeSubmit>) {
      state.cards.push(action.payload);
    },
    isCard(state, action: PayloadAction<boolean>) {
      state.isCard = action.payload;
    },
  },
});

export default formSlice.reducer;
