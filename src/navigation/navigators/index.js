import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import * as screenNames from "../screenNames";
import {AppNavigator} from './app';
import {AuthNavigator} from "./auth";

const MainNavigator = createSwitchNavigator(
    {
        [screenNames.AUTH]: AuthNavigator,
        [screenNames.APP]: AppNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
);

export default MainNavigator;