import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import catsReducer from "./features/cats/catSlice";
import catSaga from "./features/cats/catSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);
