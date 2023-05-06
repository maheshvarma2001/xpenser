import {combineReducers,legacy_createStore as createStore} from "redux";
import { expenseReducer } from "../reducers/expenses";
//import { configureStore } from "@reduxjs/toolkit";

const reducer=combineReducers({
    expenses: expenseReducer,
});

const initialState = {};
const state = createStore(reducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default state;