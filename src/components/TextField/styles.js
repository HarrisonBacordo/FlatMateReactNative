import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.offWhite,
        borderRadius: 10,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,

    },
    textInputStyle: {
        color: colors.textColor,
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderColor: colors.textColor,
    }
});