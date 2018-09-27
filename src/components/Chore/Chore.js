import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {Button} from "../Button";
import {colors} from "../../config/colors";

type Props = {};

export class Chore extends Component<Props> {

    constructor() {
        super();
        this.onNudge = this.onNudge.bind(this);
        this.onToggleChore = this.onToggleChore.bind(this);
    }

    onToggleChore() {
        this.props.onToggleChore(this.props.id, !this.props.completed);
    }

    onNudge() {
        this.props.onNudge({id: this.props.flatmateAssigned.id, choreName: this.props.choreName});
    }

    renderButtons() {
        if (this.props.flatmateAssigned.id === this.props.currentFlatmateId) {
            return (
                <CardSection>
                    <View style={styles.buttonContainerStyle}>
                        <Button onPress={this.onNudge} text={"Nudge"} color={colors.buttonColor}/>
                    </View>
                    <View style={styles.buttonContainerStyle}>
                        <Button
                            onPress={this.onToggleChore}
                            text={this.props.completed ? "Mark incomplete" : "Mark complete"}
                            color={this.props.completed ? colors.buttonColorRed : colors.buttonColorGreen}/>
                    </View>
                </CardSection>

            )
        }
        return (
            <CardSection>
                <Button color={colors.buttonColor} onPress={this.onNudge} text={'Nudge'}/>
            </CardSection>
        )
    }

    render() {
        return (
            <Card>
                <CardSection moreIcon onDelete={this.props.onDelete} objectId={this.props.id}>
                    <Text
                        style={this.props.completed ? styles.choreNameCompleteStyle : styles.choreNameIncompleteStyle}>{this.props.choreName}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.choreInterval}</Text>
                </CardSection>
                <CardSection>
                    <Image source={{uri: this.props.flatmateAssigned.profPicUri}} style={styles.imageStyle}/>
                    <Text>{this.props.flatmateAssigned.fullName}</Text>
                </CardSection>
                {this.renderButtons()}
            </Card>
        );
    }
}

Chore.propTypes = {
    profPicUri: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    choreName: PropTypes.string.isRequired,
    currentFlatmateId: PropTypes.string.isRequired,
    flatmateAssigned: PropTypes.object.isRequired,
    choreInterval: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onNudge: PropTypes.func.isRequired,
    onToggleChore: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,

};