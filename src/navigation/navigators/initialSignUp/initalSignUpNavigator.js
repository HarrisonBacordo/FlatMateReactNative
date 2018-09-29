import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers";

export const InitialSignUpNavigator = createStackNavigator(
    {
        [screenNames.NEW_FLAT]: containers.NewFlat,
        [screenNames.JOIN_FLAT]: containers.JoinFlat,
    },
    {
        initialRouteName: 'NewFlat',
    }
);