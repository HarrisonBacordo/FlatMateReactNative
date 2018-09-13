import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reminders from "./Reminders";
import {headerStyle} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class RemindersContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            ...headerStyle('Reminders'),
            headerRight: (
                <Button
                    onPress={navigation.getParam('navigateToAddReminder')}
                    title="Add"
                    color='transparent'
                />
            ),
        }
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