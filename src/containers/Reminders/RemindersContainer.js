import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reminders from "./Reminders";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class RemindersContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Reminders', navigation.getParam('navigateToAddReminder'));
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddReminder: this._navigateToAddReminder});
    }

    _navigateToAddReminder = () => {
        this.props.navigation.navigate('AddReminder');
    };

    render() {
        return <Reminders/>
    }
}

RemindersContainer.propTypes = {};

const mapStateToProps = state => ({
    reminders: state.reminders,
});

export default connect(mapStateToProps, {})(RemindersContainer);