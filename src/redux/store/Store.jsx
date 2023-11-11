import { configureStore } from "@reduxjs/toolkit";
// import MakeUp from "../action/MakeUp";
import reducer from "../reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: reducer,
  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});

export default store;
