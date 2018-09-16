import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import {Grocery} from "../Grocery";
import {Reminder} from "../Reminder";
import {Chore} from "../Chore";

type Props = {};

export class GroceriesList extends Component<Props> {

    renderCards() {
        return this.props.groceries.map(grocery =>
            <Grocery
                id={grocery.id}
                key={grocery.id}
                onDelete={this.props.onDelete}
                groceryName={grocery.groceryName}
                isCompleted={grocery.completed}/>
        )
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

GroceriesList.propTypes = {
    groceries: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};