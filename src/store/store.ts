import { configureStore, createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Типи
type State = {
  rateUSD: number;
  rateEUR: number;
  time: string;
};

// Початковий стан
const initialState: State = {
  rateUSD: 0,
  rateEUR: 0,
  time: '',
};

export const fetchRates = createAsyncThunk('rates/fetchRates', async () => {
  const response = await fetch(
    'https://v6.exchangerate-api.com/v6/c82b17d6ce27025895a0b596/latest/USD',
  );
  const data = await response.json();
  return {
    rateUSD: data.conversion_rates.USD,
    rateEUR: data.conversion_rates.EUR,
    time: data.time_last_update_utc,
  };
});

// Slice
const currencySlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRates.fulfilled,
      (state, action: PayloadAction<{ rateUSD: number; rateEUR: number; time: string }>) => {
        state.rateUSD = action.payload.rateUSD;
        state.rateEUR = action.payload.rateEUR;
        state.time = action.payload.time;
      },
    );
  },
});

export const store = configureStore({
  reducer: {
    rates: currencySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
