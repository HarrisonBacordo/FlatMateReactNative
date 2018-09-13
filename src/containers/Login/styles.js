import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    cardContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    titleStyle: {
        color: colors.offWhite,
        fontSize: 30,
    }
});