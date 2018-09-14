import {colors} from "../../config/colors";
import {StyleSheet} from "react-native";

export const buttonStyle = (buttonColor, isHeader) => {
    if (isHeader) {
        return {paddingHorizontal: 10}
    }
    return {
        backgroundColor: buttonColor,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 8,
    }
};

export const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.textColor,
    },
    headerTextStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.offWhite,
    }
});