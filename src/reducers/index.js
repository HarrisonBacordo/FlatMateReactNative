import { combineReducers } from 'redux';
import authReducer from './authReducer'
import choresReducer from './choresReducer';
import remindersReducers from './remindersReducer';
import groceriesReducer from './groceriesReducer';

export default combineReducers({
    auth: authReducer,
    chores: choresReducer,
    reminders: remindersReducers,
    groceries: groceriesReducer
});