import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import * as screenNames from "../screenNames";
import appNavigator from './mainNavigator';
import authNavigator from "./authNavigator";

const AppNavigator = createSwitchNavigator(
    {
        [screenNames.AUTH]: authNavigator,
        [screenNames.APP]: appNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
);

export default AppNavigator;