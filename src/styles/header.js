import {colors} from "../config/colors";
import {Button} from "../components/Button";
import React from "react";

export const headerStyle = headerTitle => {
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