import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {AddReminderForm} from '../../components'

const AddReminder = props =>
    <View>
        <AddReminderForm
            onSubmit={props.onSubmit}
            onChangeReminderName={props.onChangeReminderName}
            onChangeReminderDate={props.onChangeReminderDate}
            onChangeReminderInterval={props.onChangeReminderInterval}
            reminderNameValue={props.reminderNameValue}
            reminderDateValue={props.reminderDateValue}
            reminderIntervalValue={props.reminderIntervalValue}
            loading={props.loading}/>
    </View>;


AddReminder.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeReminderName: PropTypes.func.isRequired,
    onChangeReminderDate: PropTypes.func.isRequired,
    onChangeReminderInterval: PropTypes.func.isRequired,
    reminderNameValue: PropTypes.string.isRequired,
    reminderIntervalValue: PropTypes.string.isRequired,
    reminderDateValue: PropTypes.instanceOf(Date),
    loading: PropTypes.bool.isRequired,
};

export default AddReminder;