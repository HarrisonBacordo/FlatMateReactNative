import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    buttonContainerStyle: {
        marginHorizontal: '0.5%',
        width: '49%',
    },
    choreNameIncompleteStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.red,
    },
    choreNameCompleteStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.green,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageStyle: {
        width: 35,
        height: 35,
        marginRight: 5,
    },
});