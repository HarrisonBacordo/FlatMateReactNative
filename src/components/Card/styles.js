import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: colors.offWhite,
        borderBottomWidth: 0,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    cardSectionContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: colors.offWhite,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: colors.offWhite,
        position: 'relative',
    },
    cardSectionWithIconContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: colors.offWhite,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: colors.offWhite,
        position: 'relative',
    },
    iconStyle: {
        width: 20,
        height: 20,
    }
});