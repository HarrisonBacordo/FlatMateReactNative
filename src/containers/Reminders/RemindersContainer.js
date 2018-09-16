import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reminders from "./Reminders";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";
import {deleteReminder} from "../../actions/flatActions";

type Props = {};

class RemindersContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Reminders', navigation.getParam('navigateToAddReminder'));
    };

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddReminder: this._navigateToAddReminder});
    }

    _navigateToAddReminder = () => {
        this.props.navigation.navigate('AddReminder');
    };

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