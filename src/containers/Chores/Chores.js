import React from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {Header} from "../../components/Header";
import {ChoresList} from "../../components/ChoresList";

const Chores = props => {
    return (
        <ScrollView>
            <ChoresList
                chores={props.chores}
                onDelete={props.onDelete}
                profPicUri={props.profPicUri}/>
        </ScrollView>
    );
};


Chores.propTypes = {
    profPicUri: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Chores;