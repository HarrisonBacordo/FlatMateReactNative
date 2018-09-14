import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';
import {Button, TextField} from "../../components/index";
import {colors} from "../../config/colors";
import {constants} from "./constants";
import {styles} from "./styles";
import {LoginForm} from "../../components";

const Login = props =>
    <View style={styles.containerStyle}>
        <View style={styles.bannerContainer}>
            <Image source={require('../../assets/ic_launcher.png')}/>
            <Text style={styles.titleStyle}>FlatMate</Text>
        </View>
        <LoginForm
            onSubmit={props.onSubmit}
            onChangeEmail={props.onChangeEmail}
            onChangePassword={props.onChangePassword}
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            loading={props.loading}
            onSignUpPressed={() => props.navigation.navigate('SignUp')}/>
        <Button onPress={() => props.navigation.navigate('ForgotPassword')} text={constants.forgotPasswordText} color={colors.transparent}/>
    </View>;

Login.propTypes = {};

export default Login;