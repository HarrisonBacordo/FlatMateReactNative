import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {NewFlatForm} from "../../components/NewFlatForm";

const NewFlat = props =>
    <View>
        <NewFlatForm
            onSubmit={props.onSubmit}
            onChangeFlatName={props.onChangeFlatName}
            flatNameValue={props.flatNameValue}
            loading={props.loading}/>
    </View>;


NewFlat.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeFlatName: PropTypes.func.isRequired,
    flatNameValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NewFlat;