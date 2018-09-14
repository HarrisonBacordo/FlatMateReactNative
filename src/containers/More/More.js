import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {constants} from "./constants";
import {Button, MoreList} from "../../components";
import {colors} from "../../config/colors";

const More = props =>
    <View>
        <Button onPress={props.onSignOut} text={'Sign Out'} color={colors.buttonColor}/>
    </View>;


More.propTypes = {
    onSignOut: PropTypes.func.isRequired,
};

export default More;