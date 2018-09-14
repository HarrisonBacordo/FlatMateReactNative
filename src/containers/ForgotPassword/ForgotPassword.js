import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {colors} from "../../config/colors";
import {ForgotPasswordForm} from "../../components";

const ForgotPassword = props =>
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{constants.forgotPasswordText}</Text>
        <ForgotPasswordForm onSubmit={props.onSubmit} onChangeEmail={props.onChangeEmail} emailValue={props.emailValue}/>
    </View>;


ForgotPassword.propTypes = {
    emailValue: PropTypes.string.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ForgotPassword;