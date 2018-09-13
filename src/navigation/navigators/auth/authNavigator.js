import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";

export const AuthNavigator = createStackNavigator(
    {
        [screenNames.LOGIN]: containers.Login,
        [screenNames.SIGN_UP]: containers.SignUp,
        [screenNames.FORGOT_PASSWORD]: containers.ForgotPassword,
    },
    {
        initialRouteName: 'Login',
    }
);