import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddGrocery from "./AddGrocery";

type Props = {};

class AddGroceryContainer extends Component<Props> {

    render() {
        return <AddGrocery/>
    }
}

AddGroceryContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(AddGroceryContainer)