import React, {Component} from 'react';
import {connect} from 'react-redux';
import JoinFlat from "./JoinFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class JoinFlatContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('JoinFlat', navigation.getParam('navigateToAddGrocery'));
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    render() {
        return <JoinFlat/>
    }
}

JoinFlatContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(JoinFlatContainer)