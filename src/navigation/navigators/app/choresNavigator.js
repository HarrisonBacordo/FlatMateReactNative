import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";

export default createStackNavigator(
    {
        [screenNames.CHORES]: containers.Chores,
        [screenNames.ADD_CHORE]: containers.AddChore,
    },{
        initialRouteName: 'Chores',
    });