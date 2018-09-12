import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles'
import {constants} from "./constants";
import {TextField} from "../../components/TextField";
import {Button} from "../../components/Button";
import {colors} from "../../config/colors";


const SignUp = props =>
    <View>
        <Text>SignUp</Text>
        <TextField
            label={constants.firstNameLabel}
            placeholder={constants.firstNamePlaceholder}
            value={props.firstNameValue}
            onChangeText={props.onChangeFirstName}/>
        <TextField
            label={constants.lastNameLabel}
            placeholder={constants.lastNamePlaceholder}
            value={props.lastNameValue}
            onChangeText={props.onChangeLastName}/>
        <TextField
            label={constants.emailLabel}
            placeholder={constants.emailPlaceholder}
            value={props.emailValue}
            onChangeText={props.onChangeEmail}/>
        <TextField
            label={constants.passwordLabel}
            placeholder={constants.passwordPlaceholder}
            value={props.passwordValue}
            onChangeText={props.onChangePassword}/>
        <Button
            onPress={props.onSubmit}
            text={constants.signUpButtonText}
            color={colors.buttonColor}/>
    </View>;


SignUp.propTypes = {
    firstNameValue: PropTypes.string.isRequired,
    lastNameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    onChangeFirstName: PropTypes.func.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SignUp;