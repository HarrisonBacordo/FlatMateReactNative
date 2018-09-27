import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import QRCodeScanner from "react-native-qrcode-scanner";

const QrScanner = props =>
    <QRCodeScanner
        onRead={props.onSuccess}
        topContent={
            <Text style={styles.centerText}>
                Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
        }
        bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
        }
    />


QrScanner.propTypes = {
    onSuccess: PropTypes.func.isRequired,
};

export default QrScanner;