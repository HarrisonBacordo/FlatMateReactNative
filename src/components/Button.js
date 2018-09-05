import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../values/colors'

type Props = {};
export class Button extends Component<Props> {
    render() {
        const styles = {
            buttonStyle: {
                backgroundColor: this.props.color,
                borderRadius: 5,
                paddingHorizontal: 15,
                paddingVertical: 8,
                width: '50%',
            },
            textStyle: {
                textAlign: 'center',
                fontSize: 15,
                color: Colors.textColor,
            }

        };

        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
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