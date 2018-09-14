import {colors} from "../config/colors";
import {Button} from "../components/Button";
import React from "react";

export const headerStyle = (headerTitle) => {
    return {
        title: headerTitle,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTitleStyle: {
            color: colors.offWhite,
        }
    };
};

export const headerStyleWithAddButton = (headerTitle, onPress) => {
    return {
        title: headerTitle,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTitleStyle: {
            color: colors.offWhite,
        },
        headerRight: (
            <Button
                isHeader
                onPress={onPress}
                text={'Add'}
                color={colors.transparent}/>
        ),
    }
};