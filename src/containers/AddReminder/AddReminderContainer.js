import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddReminder from "./AddReminder";

type Props = {};

class AddReminderContainer extends Component<Props> {

    render() {
        return <AddReminder/>
    }
}

AddReminderContainer.propTypes = {};

const mapStateToProps = state => ({
    reminders: state.reminders,
});

export default connect(mapStateToProps, {})(AddReminderContainer)