import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import QRCode from 'react-native-qrcode';

const FlatInfo = props =>
    <View style={styles.containerStyle}>
        <Text style={styles.mainTextStyle}>Below is a QR Code that represents your Flat ID</Text>
        <QRCode
            value={props.flatId}
            size={200}
            bgColor='black'
            fgColor='white'/>
        <Text selectable style={styles.secondaryTextStyle}>Flat Id: {props.flatId}</Text>
    </View>;


FlatInfo.propTypes = {};

export default FlatInfo;