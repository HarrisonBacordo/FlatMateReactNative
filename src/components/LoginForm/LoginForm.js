import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";

type Props = {};

export class LoginForm extends Component<Props> {
    renderButton() {
        if (this.props.loading) {
            return (
                <CardSection>
                    <Spinner size={'small'}/>
                </CardSection>
            );
        } else {
            return (
                <CardSection>
                    <View style={styles.buttonContainerStyle}>
                        <Button onPress={this.props.onSignUpPressed} text={"Sign Up"} color={colors.buttonColor}/>
                    </View>
                    <View style={styles.buttonContainerStyle}>
                        <Button onPress={this.props.onSubmit} text={"Login"} color={colors.buttonColor}/>
                    </View>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <TextField label={"Email"} placeholder={"example@domain.com"} value={this.props.emailValue}
                                   onChangeText={this.props.onChangeEmail}/>
                    </CardSection>
                    <CardSection>
                        <TextField isPassword label={"Password"} placeholder={"Password Here"}
                                   value={this.props.passwordValue} onChangeText={this.props.onChangePassword}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSignUpPressed: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};