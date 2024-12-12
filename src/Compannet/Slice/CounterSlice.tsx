import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { Loading: 0 as any, Start: 0 as any, Score: 0 },
  reducers: {
    LoadingButton: (state, actions) => {
      state.Loading = actions.payload;
    },
    StartButton: (state) => {
      state.Start = 1;
    },

    ScoreButton: (state) => {
      state.Score += 100;
    },
    ScoreReset: (state) => {
      state.Score = 0;
    },
  },
});

export const actions = CounterSlice.actions;
export default CounterSlice;
