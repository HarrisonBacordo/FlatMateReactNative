import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";

export default createStackNavigator(
    {
        [screenNames.GROCERIES]: containers.Groceries,
        [screenNames.ADD_GROCERY]: containers.AddGrocery,
    }, {
        initialRouteName: 'Groceries',
    });