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

export class AddReminderForm extends Component<Props> {
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
                    <Button onPress={this.props.onSubmit} text={"Add Reminder"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"Reminder Name"} placeholder={"Flat Dinner"} value={this.props.reminderNameValue} onChangeText={this.props.onChangeReminderName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Date"} placeholder={"05 June 2020"} value={this.props.reminderDateValue} onChangeText={this.props.onChangeReminderDate}/>
                    </CardSection>

                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

AddReminderForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeReminderName: PropTypes.func.isRequired,
    onChangeReminderDate: PropTypes.func.isRequired,
    reminderNameValue: PropTypes.string.isRequired,
    reminderDateValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};