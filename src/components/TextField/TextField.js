import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';

type Props = {};

export class TextField extends Component<Props> {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.isPassword}
                    selectionColor={colors.primary}
                    underlineColorAndroid={colors.primary}
                    style={styles.textInputStyle}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}/>
            </View>
        );
    }
}

TextField.defaultProps = {
    isPassword: false,
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    isPassword: PropTypes.bool,
};