import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlatInfo from "./FlatInfo";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class FlatInfoContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('FlatInfo', navigation.getParam('navigateToAddGrocery'));
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    render() {
        return <FlatInfo/>
    }
}

FlatInfoContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(FlatInfoContainer)