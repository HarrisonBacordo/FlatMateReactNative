import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";

export default createStackNavigator(
    {
        [screenNames.REMINDERS]: containers.Reminders,
        [screenNames.ADD_REMINDER]: containers.AddReminder,
    },{
        initialRouteName: 'Reminders',
    });