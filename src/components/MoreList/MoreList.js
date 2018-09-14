import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";
import {View} from "react-native";
import {Button} from "../Button";

type Props = {};

export class MoreList extends Component<Props> {

    renderCards() {
        return this.props.chores.map(chore =>
            <Chore
                key={chore.id}
                choreName={chore.choreName}
                flatmateAssigned={chore.flatmate}
                choreInterval={chore.interval}/>
        )
    }

    render() {
        return (
            <View>
                {Button}
            </View>
        );
    }
}

MoreList.propTypes = {
};