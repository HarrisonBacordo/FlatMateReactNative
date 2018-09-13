import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chore} from "../Chore/Chore";

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
    chores: PropTypes.list.isRequired,
};

const styles = StyleSheet.create({});