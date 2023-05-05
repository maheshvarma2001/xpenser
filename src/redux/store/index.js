import {combineReducers, createStore} from "redux";
import { expenseReducer } from "../reducers/expenses";

const reducer=combineReducers({
    expenses: expenseReducer,
});

const initialState = {};
const state = createStore(reducer, initialState);

export default state;