import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {GroceriesList} from "../../components";

const Groceries = props =>
    <View>
        <GroceriesList groceries={props.groceries}/>
    </View>;


Groceries.propTypes = {
    groceries: PropTypes.array.isRequired,
};

export default Groceries;