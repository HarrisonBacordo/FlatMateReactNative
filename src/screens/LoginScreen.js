import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Button, Header, TextField} from "../components";
import {Colors} from "../values/colors";
import {logIn} from '../actions/authActions';
import { connect } from 'react-redux';

type Props = {};
class LoginScreen extends Component<Props> {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

    }

    onSubmit(e) {
        const loginData = {
            email: this.state.email,
            password: this.state.password,
        };
        logIn(loginData);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TextField label={variables.emailLabel} placeholder={variables.emailPlaceholder}/>
                <TextField label={variables.passwordLabel} placeholder={variables.passwordPlaceholder}/>
                <Button onPress={this.onSubmit} text={variables.loginButtonText} color={Colors.buttonColor}/>
                <Button onPress={() => {return 1;}} text={variables.signUpButtonText} color={Colors.buttonColor}/>
                <Button onPress={() => {return 1;}} text={variables.forgotPasswordText} color={Colors.buttonColor}/>
            </View>
        );
    }
}

LoginScreen.propTypes = {};

const variables = {
    emailLabel: 'Email',
    passwordLabel: 'Password',
    emailPlaceholder: 'example@domain.com',
    passwordPlaceholder: 'Must have at least 6 characters',
    loginButtonText: 'Login',
    signUpButtonText: 'Sign Up',
    forgotPasswordText: 'Forgot password?',
};

const styles = StyleSheet.create({
    containerStyle: {
    }
});

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect (mapStateToProps, {logIn})(LoginScreen)