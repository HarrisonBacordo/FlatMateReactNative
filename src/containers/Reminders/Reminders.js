import React from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles'
import {constants} from "./constants";
import {RemindersList} from "../../components";


const Reminders = props =>
    <ScrollView>
        <RemindersList reminders={props.reminders} onDelete={props.onDelete}/>
    </ScrollView>;


Reminders.propTypes = {
    reminders: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Reminders;