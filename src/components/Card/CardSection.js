import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {View} from "react-native";

type Props = {};

export class CardSection extends Component<Props> {
    render() {
        return (
            <View style={styles.cardSectionContainerStyle}>
                {this.props.children}
            </View>
        );
    }
}

CardSection.propTypes = {};