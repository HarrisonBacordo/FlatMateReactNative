import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CheckBox, Text} from "react-native";
import {CardSection} from "../Card/CardSection";
import {Card} from "../Card/Card";
import {styles} from "./styles"

type Props = {};

export class Grocery extends Component<Props> {

    constructor() {
        super();
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange() {
        this.props.onValueChange(this.props.id, !this.props.completed);
    }

    render() {
        return (
            <Card>
                <CardSection moreIcon onDelete={this.props.onDelete} objectId={this.props.id}>
                    <Text style={styles.groceryNameStyle}>{this.props.groceryName}</Text>
                </CardSection>
                <CardSection>
                    <CheckBox value={this.props.completed} onValueChange={this.onValueChange}/>
                </CardSection>
            </Card>
        );
    }
}

Grocery.propTypes = {
    id: PropTypes.string.isRequired,
    groceryName: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
};