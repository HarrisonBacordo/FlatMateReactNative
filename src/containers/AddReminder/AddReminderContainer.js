import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddReminder from "./AddReminder";
import {headerStyle} from "../../styles/header";
import {newReminder} from '../../actions/flatActions';

type Props = {};

class AddReminderContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyle('Groceries');
    };

    constructor() {
        super();
        this.state = {
            reminderName: '',
            reminderDate: null,
            reminderInterval: '',
            loading: false,
        };
        this.onChangeReminderName = this.onChangeReminderName.bind(this);
        this.onChangeReminderDate = this.onChangeReminderDate.bind(this);
        this.onChangeReminderInterval = this.onChangeReminderInterval.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeReminderName(text) {
        this.setState({reminderName: text});
    }

    onChangeReminderDate(choice) {
        this.setState({reminderDate: choice});
    }

    onChangeReminderInterval(choice) {
        this.setState({reminderInterval: choice});
    }

    onSubmit(e) {
        const reminder = {
            reminderName: this.state.reminderName,
            reminderDate: this.state.reminderDate,
            reminderInterval: this.state.reminderInterval,
            completed: false,
        };
        this.setState({loading: true});
        const promise = this.props.newReminder(reminder);
        if (promise !== undefined) {
            this.setState({loading: false});
            this.props.navigation.navigate('Reminders');
        }
    }

    render() {
        return <AddReminder
            reminderNameValue={this.state.reminderName}
            reminderDateValue={this.state.reminderDate}
            reminderIntervalValue={this.state.reminderInterval}
            onChangeReminderDate={this.onChangeReminderDate}
            onChangeReminderName={this.onChangeReminderName}
            onChangeReminderInterval={this.onChangeReminderInterval}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {newReminder})(AddReminderContainer)