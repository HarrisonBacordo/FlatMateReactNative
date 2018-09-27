import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {GroceriesList} from "../../components";

const Groceries = props =>
    <ScrollView>
        <GroceriesList groceries={props.groceries} onDelete={props.onDelete}/>
    </ScrollView>;


Groceries.propTypes = {
    groceries: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Groceries;