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
            reminderDate: '',
            loading: false,
        };
        this.onChangeReminderName = this.onChangeReminderName.bind(this);
        this.onChangeReminderDate = this.onChangeReminderDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeReminderName(text) {
        this.setState({reminderName: text});
    }

    onChangeReminderDate(choice) {
        this.setState({reminderDate: choice});
    }

    onSubmit(e) {
        const reminder = {
            reminderName: this.state.reminderName,
            reminderDate: this.state.reminderDate,
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
            onChangeReminderDate={this.onChangeReminderDate}
            onChangeReminderName={this.onChangeReminderName}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {newReminder})(AddReminderContainer)