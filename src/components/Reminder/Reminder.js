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
                    <Text>{this.props.reminderName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.reminderDate}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.reminderInterval}</Text>
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