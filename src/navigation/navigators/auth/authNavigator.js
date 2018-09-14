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
        navigationOptions: {
            headerTransparent: {
                position: 'absolute',
                top: 0,
                left: 0
            },
            headerBackTitleStyle: {
                opacity: 0,
            },
            headerTintColor: '#fff'
        }
    }
);