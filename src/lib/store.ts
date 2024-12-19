import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { seedSlice } from "./features/wallet/walletSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      seed : seedSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
