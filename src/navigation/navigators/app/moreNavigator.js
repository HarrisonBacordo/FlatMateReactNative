import {createStackNavigator} from "react-navigation";
import * as screenNames from "../../screenNames";
import * as containers from "../../../containers/index";

export default createStackNavigator(
    {
        [screenNames.MORE]: containers.More,
        [screenNames.NEW_FLAT]: containers.NewFlat,
        [screenNames.JOIN_FLAT]: containers.JoinFlat,
        [screenNames.QR_SCANNER]: containers.QrScanner,
        [screenNames.FLAT_INFO]: containers.FlatInfo,
    }, {
        initialRouteName: 'More',
    });