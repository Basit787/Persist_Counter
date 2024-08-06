import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import NameReducer from "./UserNameSlice";
import CounterReducer from "./CounterSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  name: NameReducer,
  counter: CounterReducer,
});

export default persistReducer(persistConfig, rootReducer);
