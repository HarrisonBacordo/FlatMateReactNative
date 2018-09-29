import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button} from "../../components";
import {colors} from "../../config/colors";

const More = props =>
    <View>
        <Button onPress={props.onSignOut} text={'Sign Out'} color={colors.buttonColor}/>
        <Button onPress={() => props.navigation.navigate('JoinFlat')} text={'Join Flat'}
                color={colors.buttonColor}/>
        <Button onPress={() => props.navigation.navigate('NewFlat')} text={'New Flat'} color={colors.buttonColor}/>
        <Button onPress={() => props.navigation.navigate('FlatInfo')} text={'Flat Info'} color={colors.buttonColor}/>
    </View>;


More.propTypes = {
    onSignOut: PropTypes.func.isRequired,
};

export default More;