import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {styles} from './styles';
import QRCodeScanner from "react-native-qrcode-scanner";

const QrScanner = props =>
    <QRCodeScanner
        onRead={props.onSuccess}
        topContent={
            <Text style={styles.centerText}>
                Scan the Flat QR code from someone already in the flat to join
            </Text>
        }
    />;


QrScanner.propTypes = {
    onSuccess: PropTypes.func.isRequired,
};

export default QrScanner;