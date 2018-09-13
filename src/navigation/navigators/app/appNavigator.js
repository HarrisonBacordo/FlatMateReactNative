import {createBottomTabNavigator} from 'react-navigation';
import * as screenNames from "../../screenNames";
import choresNavigator from "./choresNavigator";
import remindersNavigator from "./remindersNavigator";
import groceriesNavigator from "./groceriesNavigator";

export const AppNavigator = createBottomTabNavigator(
    {
        [screenNames.CHORES_TAB]: choresNavigator,
        [screenNames.REMINDERS_TAB]: remindersNavigator,
        [screenNames.GROCERIES_TAB]: groceriesNavigator,
    }
);