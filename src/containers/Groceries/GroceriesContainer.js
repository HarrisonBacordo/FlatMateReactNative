import React, {Component} from 'react';
import {connect} from 'react-redux';
import Groceries from "./Groceries";
import {headerStyleWithAddButton} from "../../styles/header";
import {deleteGrocery, toggleGrocery} from "../../actions/flatActions";

type Props = {};

//TODO GROCERIES VISUAL REFACTOR
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
        this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    onValueChange(groceryId, value) {
        this.props.toggleGrocery(groceryId, value);

    }

    onDelete(groceryId) {
        this.props.deleteGrocery(groceryId);
    }

    render() {
        return <Groceries
            groceries={this.props.flat.groceries}
            onDelete={this.onDelete}
            onValueChange={this.onValueChange}/>
    }
}

GroceriesContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {toggleGrocery, deleteGrocery})(GroceriesContainer)