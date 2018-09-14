import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewFlat from "./NewFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class NewFlatContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('NewFlat', navigation.getParam('navigateToAddGrocery'));
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    render() {
        return <NewFlat/>
    }
}

NewFlatContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(NewFlatContainer)