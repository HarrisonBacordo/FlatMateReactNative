import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native";
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {styles} from "./styles"

type Props = {};

export class Reminder extends Component<Props> {

    renderCards() {
        return (

            <Card>
                <CardSection moreIcon onDelete={this.props.onDelete} objectId={this.props.id}>
                    <Text style={styles.reminderNameStyle}>{this.props.reminderName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.reminderDate.toLocaleString()}</Text>
                </CardSection>
                <CardSection>
                    <Text>Repeats {this.props.reminderInterval}</Text>
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
    id: PropTypes.string.isRequired,
    reminderName: PropTypes.string.isRequired,
    reminderDate: PropTypes.instanceOf(Date).isRequired,
    reminderInterval: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};