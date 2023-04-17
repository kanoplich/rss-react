import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reduсers/FormSlice';
import modalReducer from './reduсers/ModalSlice';
import { apiSlice } from './reduсers/apiSlice';

export const store = configureStore({
  reducer: {
    formReducer,
    modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
