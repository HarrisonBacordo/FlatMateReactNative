import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";

type Props = {};

export class Chore extends Component<Props> {

    render() {
        return (
            <Card>
                <CardSection moreIcon onDelete={this.props.onDelete} objectId={this.props.id}>
                    <Text>{this.props.choreName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.choreInterval}</Text>
                </CardSection>
                <CardSection>
                    <Image source={{uri: this.props.flatmateAssigned.profPicUri}} style={styles.imageStyle}/>
                    <Text>{this.props.flatmateAssigned.fullName}</Text>
                </CardSection>
            </Card>
        );
    }
}

Chore.propTypes = {
    profPicUri: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    choreName: PropTypes.string.isRequired,
    flatmateAssigned: PropTypes.object.isRequired,
    choreInterval: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,

};