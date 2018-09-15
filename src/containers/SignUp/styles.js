import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    bannerContainer: {
        alignItems: 'center',
        marginBottom: '5%',
    },
    titleStyle: {
        color: colors.offWhite,
        fontSize: 30,
    }
});