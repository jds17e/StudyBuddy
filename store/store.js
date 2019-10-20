import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "./user";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore); // apply logger to redux

const reducer = combineReducers({
  user
});

const storeConfig = initialState =>
  createStoreWithMiddleware(reducer, initialState);
export default storeConfig;
