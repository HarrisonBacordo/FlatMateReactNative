import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {Header} from "../../components/Header";
import {ChoreList} from "../../components/ChoreList";

const Chores = props =>
    <View>
        <Header title={constants.headerText}/>
        <ChoreList cards={this.props.chores}/>
    </View>;


Chores.propTypes = {
    chores: PropTypes.list.isRequired,
};

export default Chores;