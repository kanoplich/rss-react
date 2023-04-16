import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './reduсers/FormSlice';
import modalReducer from './reduсers/ModalSlice';
import { apiSlice } from './reduсers/apiSlice';

const rootReducer = combineReducers({
  formReducer,
  modalReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
