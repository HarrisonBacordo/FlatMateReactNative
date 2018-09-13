import {createStackNavigator} from "react-navigation";
import * as screenNames from "../screenNames";
import * as containers from "../../containers";

export default createStackNavigator(
    {
        [screenNames.CHORES]: containers.Chores,
        [screenNames.ADD_CHORE]: containers.AddChore,
    },{
        initialRouteName: 'Chores',
    });