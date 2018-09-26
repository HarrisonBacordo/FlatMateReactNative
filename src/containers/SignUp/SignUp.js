import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {styles} from './styles'
import {constants} from "./constants";
import {TextField} from "../../components/TextField";
import {Button} from "../../components/Button";
import {colors} from "../../config/colors";
import {SignUpForm} from "../../components";


const SignUp = props =>
    <View style={styles.containerStyle}>
        <View style={styles.bannerContainer}>
            <Text style={styles.titleStyle}>{constants.signUpTitle}</Text>
        </View>
        <SignUpForm
            onSubmit={props.onSubmit}
            onChangePictureUri={props.onChangePictureUri}
            onChangeFirstName={props.onChangeFirstName}
            onChangeLastName={props.onChangeLastName}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
            pictureUriValue={props.pictureUriValue}
            firstNameValue={props.firstNameValue}
            lastNameValue={props.lastNameValue}
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            loading={props.loading}/>
    </View>;


SignUp.propTypes = {
    pictureUri: PropTypes.object.isRequired,
    firstNameValue: PropTypes.string.isRequired,
    lastNameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    onChangeFirstName: PropTypes.func.isRequired,
    onChangePictureUri: PropTypes.func.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SignUp;