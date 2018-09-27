import React, {Component} from 'react';
import {connect} from 'react-redux';
import Groceries from "./Groceries";
import {headerStyleWithAddButton} from "../../styles/header";
import {deleteGrocery} from "../../actions/flatActions";

type Props = {};

class GroceriesContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Groceries', navigation.getParam('navigateToAddGrocery'));
    };
    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    onDelete(groceryId) {
        this.props.deleteGrocery(groceryId);
    }

    render() {
        return <Groceries
            groceries={this.props.flat.groceries}
            onDelete={this.onDelete}/>
    }
}

GroceriesContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {deleteGrocery: deleteGrocery})(GroceriesContainer)