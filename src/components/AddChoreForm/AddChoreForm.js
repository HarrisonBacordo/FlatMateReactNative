import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";

type Props = {};

export class AddChoreForm extends Component<Props> {
    renderButton() {
        //FIXME form collapses when loading is true
        if (this.props.loading) {
            return (
                <CardSection>
                    <Spinner size={'small'}/>
                </CardSection>
            );
        } else {
            return (
                <CardSection>
                    <Button onPress={this.props.onSubmit} text={"Add Chore"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"Chore"} placeholder={"Clean living room"} value={this.props.choreNameValue} onChangeText={this.props.onChangeChoreName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Interval"} placeholder={"Weekly"} value={this.props.choreIntervalValue} onChangeText={this.props.onChangeChoreInterval}/>
                    </CardSection>

                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

AddChoreForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeChoreName: PropTypes.func.isRequired,
    onChangeChoreInterval: PropTypes.func.isRequired,
    choreNameValue: PropTypes.string.isRequired,
    choreIntervalValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};