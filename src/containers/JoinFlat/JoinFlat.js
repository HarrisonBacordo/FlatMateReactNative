import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {JoinFlatForm} from "../../components/JoinFlatForm";
import {Button} from "../../components/Button";
import {colors} from "../../config/colors";

const JoinFlat = props =>
    <View>
        <JoinFlatForm
            onSubmit={props.onSubmit}
            onChangeFlatId={props.onChangeFlatId}
            flatIdValue={props.flatIdValue}
            loading={props.loading}/>
        <Button onPress={() => props.navigation.navigate('QrScanner')} text={constants.navigateQrScannerText} color={colors.transparent}/>
    </View>;


JoinFlat.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeFlatId: PropTypes.func.isRequired,
    flatIdValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default JoinFlat;