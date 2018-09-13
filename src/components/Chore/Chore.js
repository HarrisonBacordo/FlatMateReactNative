import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";

type Props = {};

export class Chore extends Component<Props> {

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text>{this.props.choreName}</Text>
                        <Text>{this.props.choreInterval}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

Chore.propTypes = {
    choreName: PropTypes.string.isRequired,
    flatmateAssigned: PropTypes.string.isRequired,
    choreInterval: PropTypes.string.isRequired,

};