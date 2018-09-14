import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";
import {Text, View} from "react-native";
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {styles} from "../Chore/styles";

type Props = {};

export class Reminder extends Component<Props> {

    renderCards() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text>{this.props.reminderName}</Text>
                        <Text>{this.props.reminderDate}</Text>
                        <Text>{this.props.reminderInterval}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

Reminder.propTypes = {
    reminderName: PropTypes.string.isRequired,
    reminderDate: PropTypes.string.isRequired,
    reminderInterval: PropTypes.string.isRequired,
};