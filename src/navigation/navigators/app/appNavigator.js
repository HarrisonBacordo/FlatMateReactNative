import {createBottomTabNavigator} from 'react-navigation';
import * as screenNames from "../../screenNames";
import choresNavigator from "./choresNavigator";
import remindersNavigator from "./remindersNavigator";
import groceriesNavigator from "./groceriesNavigator";
import moreNavigator from "./moreNavigator";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import FaIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";

export const AppNavigator = createBottomTabNavigator(
    {
        [screenNames.CHORES_TAB]: {
            screen:choresNavigator,
            navigationOptions: {
                tabBarLabel:"Chores",
                tabBarIcon: ({ tintColor }) => (
                    <Fa5Icon name="broom" size={20} />
                )
            }
        },
        [screenNames.REMINDERS_TAB]: {
            screen: remindersNavigator,
            navigationOptions: {
                tabBarLabel:"Reminders",
                tabBarIcon: ({ tintColor }) => (
                    <FaIcon name="calendar" size={20} />
                )
            }
        },
        [screenNames.GROCERIES_TAB]: {
            screen: groceriesNavigator,
            navigationOptions: {
                tabBarLabel:"Groceries",
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcon name="local-grocery-store" size={20} />
                )
            }
        },
        [screenNames.MORE_TAB]: {
            screen: moreNavigator,
            navigationOptions: {
                tabBarLabel:"More",
                tabBarIcon: ({ tintColor }) => (
                    <FeatherIcon name="more-horizontal" size={20} />
                )
            }
        },
    },
    {
        tabBarOptions: {
            showIcon: true
        },
    }
);