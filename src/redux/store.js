import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
