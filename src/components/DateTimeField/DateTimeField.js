import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Button} from "../Button";
import DateTimePicker from "react-native-modal-datetime-picker";

type Props = {};

export class DateTimeField extends Component<Props> {
    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        this.props.onChangeReminderDate(date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                    <TouchableOpacity onPress={this._showDateTimePicker} style={styles.buttonStyle}>
                        <Text>{this.props.reminderDateValue === null ? "Date/Time..." : this.props.reminderDateValue.toLocaleString()}</Text>
                    </TouchableOpacity>
                <DateTimePicker
                    mode={"datetime"}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        );
    }
}

DateTimeField.propTypes = {
    label: PropTypes.string.isRequired,
    onChangeReminderDate: PropTypes.func.isRequired,
    reminderDateValue: PropTypes.instanceOf(Date),
};