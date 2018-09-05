import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import { styles } from './styles';

type Props = {};
export class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};