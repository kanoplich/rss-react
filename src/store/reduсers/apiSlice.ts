import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchData, CardData } from 'types';

interface ApiState {
  data: FetchData;
  isLoading: boolean;
  modalLoading: boolean;
  isError: string | null;
  dataId: CardData | undefined;
}

const initialState: ApiState = {
  data: {
    info: {
      count: '',
      next: '',
      pages: '',
      prev: '',
    },
    results: [],
  },
  isLoading: false,
  modalLoading: false,
  isError: null,
  dataId: undefined,
};

export const fetchData = createAsyncThunk('api/getApi', async function (query: string, thunk) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${query}`);

  if (!response.ok) {
    return thunk.rejectWithValue('No card');
  }

  const data: FetchData = await response.json();
  return data;
});

export const fetchDataId = createAsyncThunk(
  'api/getApiId',
  async function (param: { id: number; isSkip: boolean }, thunk) {
    if (param.isSkip) {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${param.id}`);

      if (!response.ok) {
        return thunk.rejectWithValue('No card');
      }

      const data: CardData = await response.json();
      return data;
    }
  }
);

const apiSliceThunk = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.data = initialState.data;
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(fetchDataId.fulfilled, (state, action) => {
        state.dataId = action.payload;
        state.modalLoading = false;
      })
      .addCase(fetchDataId.pending, (state) => {
        state.modalLoading = true;
        state.dataId = undefined;
      });
  },
});

export default apiSliceThunk.reducer;
