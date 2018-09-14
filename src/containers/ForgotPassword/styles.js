import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    titleStyle: {
        textAlign: 'center',
        color: colors.offWhite,
        fontSize: 20,
        marginBottom: '10%',
    }
});