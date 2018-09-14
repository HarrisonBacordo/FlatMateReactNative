import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";
import {AuthNavigator} from "../auth";

export default createStackNavigator(
    {
        [screenNames.MORE]: containers.More,
        [screenNames.NEW_FLAT]: containers.NewFlat,
        [screenNames.JOIN_FLAT]: containers.JoinFlat,
        [screenNames.FLAT_INFO]: containers.FlatInfo,
    },{
        initialRouteName: 'More',
    });