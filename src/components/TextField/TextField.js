import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';

type Props = {};

export class TextField extends Component<Props> {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({'value': e});
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    selectionColor={colors.primary}
                    underlineColorAndroid={colors.primary}
                    style={styles.textInputStyle}
                    value={this.state.value}
                    onChangeText={this.onChange}
                    placeholder={this.props.placeholder}/>
            </View>
        );
    }
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};