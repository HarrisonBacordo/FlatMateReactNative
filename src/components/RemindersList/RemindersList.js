import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import {Reminder} from "../Reminder";
import {Chore} from "../Chore";

type Props = {};

export class RemindersList extends Component<Props> {

    renderCards() {
        return this.props.reminders.map(reminder =>
            <Reminder
                id={reminder.id}
                key={reminder.id}
                onDelete={this.props.onDelete}
                reminderName={reminder.reminderName}
                reminderDate={reminder.reminderDate}
                reminderInterval={reminder.interval}/>
        )
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

RemindersList.propTypes = {
    reminders: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};