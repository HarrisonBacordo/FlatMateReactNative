import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from "../values/colors";

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

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    textStyle: {
        color: Colors.offWhite,
        fontSize: 30
    }
});