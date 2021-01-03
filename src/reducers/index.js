import { combineReducers } from 'redux';
import populationReducer from "./populationReducer";

export default combineReducers({ population: populationReducer });
