import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {ChoresList} from "../../components/ChoresList";

const Chores = props => {
    return (
        <ScrollView>
            <ChoresList
                chores={props.chores}
                onDelete={props.onDelete}
                onNudge={props.onNudge}
                onToggleChore={props.onToggleChore}
                profPicUri={props.profPicUri}
                currentFlatmateId={props.currentFlatmateId}/>
        </ScrollView>
    );
};


Chores.propTypes = {
    profPicUri: PropTypes.string.isRequired,
    currentFlatmateId: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onNudge: PropTypes.func.isRequired,
    onToggleChore: PropTypes.func.isRequired,
};

export default Chores;