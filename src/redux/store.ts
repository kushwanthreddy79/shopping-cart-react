import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

// Types for Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;