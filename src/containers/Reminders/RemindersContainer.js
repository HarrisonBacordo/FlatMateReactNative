import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reminders from "./Reminders";

type Props = {};

class RemindersContainer extends Component<Props> {

    render() {
        return <Reminders/>
    }
}

RemindersContainer.propTypes = {};

const mapStateToProps = state => ({
    reminders: state.reminders,
});

export default connect(mapStateToProps, {})(RemindersContainer);