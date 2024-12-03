import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./apiSlice";
import { soclialMediaCountSlice } from "./socialMediaCountSlice";
import { recommendationSlice } from "./recommendationSlice";
import { stockDataSlice } from "./stockDataSlice";

export const store = configureStore({
  reducer: {
    counter: soclialMediaCountSlice.reducer,
    data: stockDataSlice.reducer,
    recommendation: recommendationSlice.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([dataApi.middleware]),
});
