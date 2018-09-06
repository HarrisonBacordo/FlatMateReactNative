import React, {Component} from 'react';
import {connect} from 'react-redux';
import Groceries from "./Groceries";

type Props = {};

class GroceriesContainer extends Component<Props> {

    render() {
        return <Groceries/>
    }
}

GroceriesContainer.propTypes = {};

const mapStateToProps = state => ({
    groceries: state.groceries,
});

export default connect(mapStateToProps, {})(GroceriesContainer)