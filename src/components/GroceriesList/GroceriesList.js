import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import {Grocery} from "../Grocery";

type Props = {};

export class GroceriesList extends Component<Props> {

    renderCards() {
        return this.props.groceries.map(grocery =>
            <Grocery
                id={grocery.id}
                key={grocery.id}
                onDelete={this.props.onDelete}
                onValueChange={this.props.onValueChange}
                groceryName={grocery.groceryName}
                completed={grocery.completed}/>
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
    onValueChange: PropTypes.func.isRequired,
};