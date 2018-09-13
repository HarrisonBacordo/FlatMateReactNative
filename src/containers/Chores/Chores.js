import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {Header} from "../../components/Header";
import {ChoresList} from "../../components/ChoresList";

const Chores = props => {
    return (
        <View>
            <Header title={constants.headerText}/>
            <ChoresList chores={props.chores}/>
        </View>
    );
};


Chores.propTypes = {
    chores: PropTypes.array.isRequired,
};

export default Chores;