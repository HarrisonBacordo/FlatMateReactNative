import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';
import {Button, TextField} from "../../components/index";
import {colors} from "../../config/colors";
import {constants} from "./constants";
import {styles} from "./styles";

const Login = props =>
    <View style={styles.containerStyle}>
        <Image source={require('../../assets/ic_launcher.png')}/>
        <Text style={styles.titleStyle}>FlatMate</Text>
        <TextField
            label={constants.emailLabel}
            placeholder={constants.emailPlaceholder}/>
        <TextField
            label={constants.passwordLabel}
            placeholder={constants.passwordPlaceholder}/>
        <Button
            onPress={props.onSubmit}
            text={constants.loginButtonText}
            color={colors.buttonColor} />
        <Button
            onPress={() => props.navigation.navigate('SignUp')}
            text={constants.signUpButtonText}
            color={colors.buttonColor} />
        <Button
            onPress={() => props.navigation.navigate('ForgotPassword')}
            text={constants.forgotPasswordText}
            color={colors.buttonColor} />
    </View>;

Login.propTypes = {};

export default Login;