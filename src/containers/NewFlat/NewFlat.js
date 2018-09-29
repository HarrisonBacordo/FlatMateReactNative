import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {NewFlatForm} from "../../components/NewFlatForm";
import {Button} from "../../components/Button";
import {constants} from "./constants";
import {colors} from "../../config/colors";

const NewFlat = props =>
    <View>
        <NewFlatForm
            onSubmit={props.onSubmit}
            onChangeFlatName={props.onChangeFlatName}
            flatNameValue={props.flatNameValue}
            loading={props.loading}/>
        <Button lowercase onPress={() => props.navigation.navigate('JoinFlat')} text={constants.joinFlatButton}
                color={colors.transparent}/>
    </View>;


NewFlat.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeFlatName: PropTypes.func.isRequired,
    flatNameValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NewFlat;