import {colors} from "../../config/colors";
import {StyleSheet} from "react-native";

export const buttonStyle = buttonColor => {
    return {
        backgroundColor: buttonColor,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: '50%',
    }
};

export const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.textColor,
    }
});