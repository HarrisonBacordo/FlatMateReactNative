import React from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles'
import {constants} from "./constants";
import {RemindersList} from "../../components";


const Reminders = props =>
    <ScrollView>
        <RemindersList reminders={props.reminders}/>
    </ScrollView>;


Reminders.propTypes = {
    reminders: PropTypes.array.isRequired,
};

export default Reminders;