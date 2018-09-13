import {createStackNavigator} from "react-navigation";
import * as screenNames from "../screenNames";
import * as containers from "../../containers";

export default createStackNavigator(
    {
        [screenNames.GROCERIES]: containers.Groceries,
        [screenNames.ADD_GROCERY]: containers.AddGrocery,
    },{
        initialRouteName: 'Groceries',
    });