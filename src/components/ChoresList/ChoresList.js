import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";
import {View} from "react-native";

type Props = {};

export class ChoresList extends Component<Props> {

    renderCards() {
        return this.props.chores.map(chore =>
            <Chore
                id={chore.id}
                key={chore.id}
                onDelete={this.props.onDelete}
                choreName={chore.choreName}
                flatmateAssigned={chore.flatmate}
                choreInterval={chore.interval}
                profPicUri={this.props.profPicUri}/>
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

ChoresList.propTypes = {
    profPicUri: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};