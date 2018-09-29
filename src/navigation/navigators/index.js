import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import * as screenNames from "../screenNames";
import {AppNavigator} from './app';
import {AuthNavigator} from "./auth";
import {InitialSignUpNavigator} from "./initialSignUp";

const MainNavigator = createSwitchNavigator(
    {
        [screenNames.AUTH]: AuthNavigator,
        [screenNames.INITIAL_SIGN_UP]: InitialSignUpNavigator,
        [screenNames.APP]: AppNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
);

export default MainNavigator;