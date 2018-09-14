import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles'
import {constants} from "./constants";
import {RemindersList} from "../../components";


const Reminders = props =>
    <View>
        <RemindersList reminders={props.reminders}/>
    </View>;


Reminders.propTypes = {
    reminders: PropTypes.array.isRequired,
};

export default Reminders;