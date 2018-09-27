import React, {Component} from 'react';
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
                choreInterval={chore.choreInterval}/>
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

MoreList.propTypes = {};