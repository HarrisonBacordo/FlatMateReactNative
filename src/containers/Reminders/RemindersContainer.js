import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reminders from "./Reminders";
import {headerStyleWithAddButton} from "../../styles/header";
import {deleteReminder} from "../../actions/flatActions";

type Props = {};

class RemindersContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Reminders', navigation.getParam('navigateToAddReminder'));
    };
    _navigateToAddReminder = () => {
        this.props.navigation.navigate('AddReminder');
    };

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddReminder: this._navigateToAddReminder});
    }

    onDelete(reminderId) {
        this.props.deleteReminder(reminderId);
    }

    render() {
        return <Reminders reminders={this.props.flat.reminders} onDelete={this.onDelete}/>
    }
}

RemindersContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {deleteReminder: deleteReminder})(RemindersContainer);