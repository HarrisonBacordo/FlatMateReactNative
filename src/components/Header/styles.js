import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    textStyle: {
        color: colors.offWhite,
        fontSize: 30
    }
});