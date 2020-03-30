import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getUserDataReducer } from "./Reducer";

let rootReducer = combineReducers({
  UserData: getUserDataReducer
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
