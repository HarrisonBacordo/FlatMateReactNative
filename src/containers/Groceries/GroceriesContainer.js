import React, {Component} from 'react';
import {connect} from 'react-redux';
import Groceries from "./Groceries";
import {headerStyle} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class GroceriesContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            ...headerStyle('Groceries'),
            headerRight: (
                <Button
                    onPress={navigation.getParam('navigateToAddGrocery')}
                    title="Add"
                    color='transparent'
                />
            ),
        }
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