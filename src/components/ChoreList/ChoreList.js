import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";
import {View} from "react-native";

type Props = {};

export class ChoreList extends Component<Props> {

    renderCards() {
        return this.props.chores.map(chore =>
            <Chore
                choreName={chore.choreName}
                flatmateAssigned={chore.flatmate}
                choreInterval={chore.interval}/>
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

ChoreList.propTypes = {
    chores: PropTypes.array.isRequired,
};