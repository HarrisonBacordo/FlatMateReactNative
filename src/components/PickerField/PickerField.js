import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Picker, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {};

export class PickerField extends Component<Props> {
    renderPickerItems() {
        return this.props.items.map(item =>
            <Picker.Item
                label={item.label}
                value={item.value}/>
        )
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <Picker
                    selectedValue={this.props.selectedValue}
                    onValueChange={this.props.onValueChange}
                    style={styles.textInputStyle}>
                    {this.renderPickerItems()}
                </Picker>
            </View>
        );
    }
}

PickerField.defaultProps = {
    isPassword: false,
};

PickerField.propTypes = {
    label: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};