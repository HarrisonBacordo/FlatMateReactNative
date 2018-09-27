import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyle, styles} from "./styles";

type Props = {};

export class Button extends Component<Props> {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.style === null ? buttonStyle(this.props.color, this.props.isHeader) : this.props.style}>
                <Text style={this.props.isHeader ? styles.headerTextStyle : styles.textStyle}>
                    {this.props.lowercase ? this.props.text : this.props.text.toUpperCase()}
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    isHeader: false,
    lowercase: false,
    leftAlignText: false,
    style: null,
};

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
    lowercase: PropTypes.bool,
    leftAlignText: PropTypes.bool,
    style: PropTypes.object,
};