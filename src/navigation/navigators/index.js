import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as screenNames from "../screenNames";
import * as containers from "../../containers";


const AppNavigator = createStackNavigator(
    {
        [screenNames.LOGIN]: containers.Login,
        [screenNames.SIGN_UP]: containers.SignUp,
        [screenNames.FORGOT_PASSWORD]: containers.ForgotPassword,
        [screenNames.CHORES]: containers.Chores,
        [screenNames.ADD_CHORE]: containers.AddChore,
        [screenNames.REMINDERS]: containers.Reminders,
        [screenNames.ADD_REMINDER]: containers.AddReminder,
        [screenNames.GROCERIES]: containers.Groceries,
        [screenNames.ADD_GROCERY]: containers.AddGrocery,
    },
    {
        initialRouteName: 'Login',
    }
);

export default AppNavigator;