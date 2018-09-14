import React, {Component} from 'react';
import {connect} from 'react-redux';
import Groceries from "./Groceries";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class GroceriesContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Groceries', navigation.getParam('navigateToAddGrocery'));
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddGrocery');
    };

    render() {
        return <Groceries/>
    }
}

GroceriesContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(GroceriesContainer)