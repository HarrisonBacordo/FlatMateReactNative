import { combineReducers } from 'redux';
import authReducer from './authReducer';
import flatmateReducer from "./flatmateReducer";
import flatReducer from "./flatReducer";

export default combineReducers({
    auth: authReducer,
    flat: flatReducer,
    flatmates: flatmateReducer,

});