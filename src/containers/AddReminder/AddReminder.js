import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {AddReminderForm} from '../../components'

const AddReminder = props =>
    <View>
        <AddReminderForm
            onSubmit={props.onSubmit}
            onChangeReminderName={props.onChangeReminderName}
            onChangeReminderDate={props.onChangeReminderDate}
            reminderNameValue={props.reminderNameValue}
            reminderDateValue={props.reminderDateValue}
            loading={props.loading}/>
    </View>;


AddReminder.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeReminderName: PropTypes.func.isRequired,
    onChangeReminderDate: PropTypes.func.isRequired,
    reminderNameValue: PropTypes.string.isRequired,
    reminderDateValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default AddReminder;