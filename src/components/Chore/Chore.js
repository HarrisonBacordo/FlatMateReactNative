import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image} from 'react-native';
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";

type Props = {};

export class Chore extends Component<Props> {

    render() {
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.choreName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.choreInterval}</Text>
                </CardSection>
                <CardSection>
                    <Image source={require('../../assets/ic_launcher.png')} style={styles.imageStyle}/>
                    <Text>{this.props.flatmateAssigned}</Text>
                </CardSection>
            </Card>
        );
    }
}

Chore.propTypes = {
    choreName: PropTypes.string.isRequired,
    flatmateAssigned: PropTypes.string.isRequired,
    choreInterval: PropTypes.string.isRequired,

};