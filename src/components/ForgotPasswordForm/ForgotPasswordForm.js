import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";

type Props = {};

export class ForgotPasswordForm extends Component<Props> {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField
                            label={"Email"}
                            placeholder={"example@domain.com"}
                            value={this.props.emailValue}
                            onChangeText={this.props.onChangeEmail}/>
                    </CardSection>
                    <CardSection>
                        <Button
                            onPress={this.props.onSubmit}
                            text={"Submit"}
                            color={colors.buttonColor}/>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
};