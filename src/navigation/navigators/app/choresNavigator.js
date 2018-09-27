import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";

export default createStackNavigator(
    {
        [screenNames.CHORES]: containers.Chores,
        [screenNames.ADD_CHORE]: containers.AddChore,
    }, {
        initialRouteName: 'Chores',
        navigationOptions: {
            tabBarLabel: "Chores",
            tabBarIcon: ({tintColor}) => (
                <Icon name="delete" size={30} color="#900"/>
            )
        }

    });