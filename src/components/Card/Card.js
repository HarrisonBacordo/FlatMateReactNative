import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from "./styles";

type Props = {};

export class Card extends Component<Props> {
    render() {
        return (
            <View style={styles.cardContainerStyle}>
                {this.props.children}
            </View>
        );
    }
}

Card.propTypes = {};