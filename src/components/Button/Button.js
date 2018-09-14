import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {styles, buttonStyle} from "./styles";

type Props = {};
export class Button extends Component<Props> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={buttonStyle(this.props.color, this.props.isHeader)}>
                <Text style={this.props.isHeader ? styles.headerTextStyle : styles.textStyle}>{this.props.text.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    isHeader: false,
};

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
};