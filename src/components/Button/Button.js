import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {styles, buttonStyle} from "./styles";

type Props = {};
export class Button extends Component<Props> {
    render() {


        return (
            <TouchableOpacity onPress={this.props.onPress} style={buttonStyle(this.props.color)}>
                <Text style={styles.textStyle}>{this.props.text.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};