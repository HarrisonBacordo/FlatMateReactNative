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
                onNudge={this.props.onNudge}
                onToggleChore={this.props.onToggleChore}
                choreName={chore.choreName}
                flatmateAssigned={chore.flatmate}
                choreInterval={chore.interval}
                completed={chore.completed}
                profPicUri={this.props.profPicUri}
                currentFlatmateId={this.props.currentFlatmateId}/>
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
    currentFlatmateId: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onNudge: PropTypes.func.isRequired,
    onToggleChore: PropTypes.func.isRequired,
};