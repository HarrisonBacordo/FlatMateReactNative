import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {TextField} from "../../components/TextField";
import {Button} from "../../components/Button";
import {colors} from "../../config/colors";

const ForgotPassword = props =>
    <View>
        <Text>{constants.forgotPasswordText}</Text>
        <TextField
            label={constants.emailLabel}
            placeholder={constants.emailPlaceholder}
            value={props.emailValue}
            onChangeText={props.onChangeEmail}/>
        <Button
            onPress={props.onSubmit}
            text={constants.buttonText}
            color={colors.buttonColor}/>
    </View>;


ForgotPassword.propTypes = {
    emailValue: PropTypes.string.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ForgotPassword;