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
import {colors} from "../../../config/colors";

const ICON_SIZE = 25;

export const AppNavigator = createBottomTabNavigator(
    {
        [screenNames.CHORES_TAB]: {
            screen:choresNavigator,
            navigationOptions: {
                tabBarLabel:"Chores",
                tabBarIcon: ({ tintColor }) => (
                    <Fa5Icon name="broom" size={ICON_SIZE} color={tintColor} />
                )
            }
        },
        [screenNames.REMINDERS_TAB]: {
            screen: remindersNavigator,
            navigationOptions: {
                tabBarLabel:"Reminders",
                tabBarIcon: ({ tintColor }) => (
                    <FaIcon name="calendar" size={ICON_SIZE} color={tintColor}/>
                )
            }
        },
        [screenNames.GROCERIES_TAB]: {
            screen: groceriesNavigator,
            navigationOptions: {
                tabBarLabel:"Groceries",
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcon name="local-grocery-store" size={ICON_SIZE} color={tintColor}/>
                )
            }
        },
        [screenNames.MORE_TAB]: {
            screen: moreNavigator,
            navigationOptions: {
                tabBarLabel:"More",
                tabBarIcon: ({ tintColor }) => (
                    <FeatherIcon name="more-horizontal" size={ICON_SIZE} color={tintColor} />
                )
            }
        },
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
        },
    }
);