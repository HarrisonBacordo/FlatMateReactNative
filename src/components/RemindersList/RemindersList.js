import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import {Reminder} from "../Reminder";

type Props = {};

export class RemindersList extends Component<Props> {

    renderCards() {
        return this.props.reminders.map(reminder =>
            <Reminder
                key={reminder.id}
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
    reminder: PropTypes.array.isRequired,
};