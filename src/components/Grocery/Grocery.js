import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";
import {Text, View} from "react-native";
import {CardSection} from "../Card/CardSection";
import {Card} from "../Card/Card";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

type Props = {};

export class Grocery extends Component<Props> {

    render() {
        return (
            <Card>
                <CardSection moreIcon>
                    <Text>{this.props.groceryName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.isCompleted}</Text>
                </CardSection>
            </Card>
        );
    }
}

Grocery.propTypes = {
    groceryName: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
};