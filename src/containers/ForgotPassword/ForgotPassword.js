import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {ForgotPasswordForm} from "../../components";

const ForgotPassword = props =>
    <View style={styles.containerStyle}>
        <View style={styles.bannerContainer}>
            <Text style={styles.titleStyle}>{constants.forgotPasswordText}</Text>
        </View>
        <ForgotPasswordForm
            onSubmit={props.onSubmit}
            onChangeEmail={props.onChangeEmail}
            emailValue={props.emailValue}
            loading={props.loading}/>
    </View>;


ForgotPassword.propTypes = {
    emailValue: PropTypes.string.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default ForgotPassword;