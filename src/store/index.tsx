import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Compannet/Slice/CounterSlice";

const store = configureStore({
  reducer: CounterSlice.reducer,
});

export default store;
