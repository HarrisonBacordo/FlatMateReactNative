import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

type Props = {};
export class Spinner extends Component<Props> {
    render() {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={this.props.size || 'large'}/>
            </View>
        );
    }
}

Spinner.propTypes = {
    size: PropTypes.string,
};