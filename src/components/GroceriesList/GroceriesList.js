import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import {Grocery} from "../Grocery";

type Props = {};

export class GroceriesList extends Component<Props> {

    renderCards() {
        return this.props.groceries.map(grocery =>
            <Grocery
                key={grocery.id}
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
};