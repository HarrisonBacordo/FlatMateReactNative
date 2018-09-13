import {createStackNavigator} from "react-navigation";
import * as screenNames from "../screenNames";
import * as containers from "../../containers";

export default createStackNavigator(
    {
        [screenNames.REMINDERS]: containers.Reminders,
        [screenNames.ADD_REMINDER]: containers.AddReminder,
    },{
        initialRouteName: 'Reminders',
    });