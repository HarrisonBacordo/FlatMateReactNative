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
import {DateTimeField} from "../DateTimeField";
import {PickerField} from "../PickerField";

type Props = {};

export class AddReminderForm extends Component<Props> {
    state = {
        isDateTimePickerVisible: false,
    };

    items = [
        {
            label: "Daily",
            value: "Daily",
        },
        {
            label: "Weekly",
            value: "Weekly",
        },
        {
            label: "Fortnightly",
            value: "Fortnightly",
        },
        {
            label: "Monthly",
            value: "Monthly",
        },
    ];

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
                        <TextField label={"Reminder Name"} placeholder={"Flat Dinner"}
                                   value={this.props.reminderNameValue} onChangeText={this.props.onChangeReminderName}/>
                    </CardSection>
                    <CardSection>
                        <DateTimeField
                            label={"Date/Time"}
                            onChangeReminderDate={this.props.onChangeReminderDate}
                            reminderDateValue={this.props.reminderDateValue}/>
                    </CardSection>
                    <CardSection>
                        <PickerField
                            label={"Interval"}
                            selectedValue={this.props.reminderIntervalValue}
                            onValueChange={this.props.onChangeReminderInterval}
                            items={this.items}/>
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
    onChangeReminderInterval: PropTypes.func.isRequired,
    reminderNameValue: PropTypes.string.isRequired,
    reminderDateValue: PropTypes.instanceOf(Date),
    reminderIntervalValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};