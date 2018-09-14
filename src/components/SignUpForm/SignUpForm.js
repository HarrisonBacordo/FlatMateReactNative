import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";

type Props = {};

export class SignUpForm extends Component<Props> {
    renderButton() {
        //FIXME form collapses when loading is true
        if (this.props.loading) {
            return (
                <CardSection>
                    <Spinner size={'small'}/>
                </CardSection>
            );
        } else {
            return (
                <CardSection>
                    <Button onPress={this.props.onSubmit} text={"Sign Up"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"First Name"} placeholder={"John"} value={this.props.firstNameValue} onChangeText={this.props.onChangeFirstName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Last Name"} placeholder={"Appleseed"} value={this.props.lastNameValue} onChangeText={this.props.onChangeLastName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Email"} placeholder={"example@domain.com"} value={this.props.emailValue} onChangeText={this.props.onChangeEmail}/>
                    </CardSection>
                    <CardSection>
                        <TextField isPassword label={"Password"} placeholder={"Password here"} value={this.props.passwordValue} onChangeText={this.props.onChangePassword}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};