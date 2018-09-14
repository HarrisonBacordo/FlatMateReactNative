import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {AddChoreForm} from '../../components'

const AddChore = props =>
    <View>
        <AddChoreForm
            onSubmit={props.onSubmit}
            onChangeChoreName={props.onChangeChoreName}
            onChangeChoreInterval={props.onChangeChoreInterval}
            choreNameValue={props.choreNameValue}
            choreIntervalValue={props.choreIntervalValue}
            loading={props.loading}/>
    </View>;


AddChore.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeChoreName: PropTypes.func.isRequired,
    onChangeChoreInterval: PropTypes.func.isRequired,
    choreNameValue: PropTypes.string.isRequired,
    choreIntervalValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default AddChore;