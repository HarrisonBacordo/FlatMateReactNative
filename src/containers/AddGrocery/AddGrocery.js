import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {AddGroceryForm} from '../../components'

const AddGrocery = props =>
    <View>
        <AddGroceryForm
            onSubmit={props.onSubmit}
            onChangeGroceryName={props.onChangeGroceryName}
            groceryNameValue={props.groceryNameValue}
            loading={props.loading}/>
    </View>;


AddGrocery.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeGroceryName: PropTypes.func.isRequired,
    groceryNameValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default AddGrocery;