import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as screenNames from "../screenNames";
import LoginContainer from "../../containers/Login/LoginContainer";
import {SignUpContainer} from "../../containers/SignUp/SignUpContainer";
import {ForgotPasswordContainer} from "../../containers/ForgotPassword/ForgotPasswordContainer";

const AppNavigator = createStackNavigator(
    {
        [screenNames.LOGIN]: LoginContainer,
        [screenNames.SIGNUP]: SignUpContainer,
        [screenNames.FORGOT_PASSWORD]: ForgotPasswordContainer,
    },
    {
        initialRouteName: 'Login',
    }
);

export default AppNavigator;