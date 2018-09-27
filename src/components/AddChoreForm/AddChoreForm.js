import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, Picker} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";
import {PickerField} from "../PickerField";

type Props = {};

export class AddChoreForm extends Component<Props> {
    constructor() {
        super();
        this.items = [
            {
                label: "Daily",
                value: "Daily",
            },
            {
                label: "Weekly",
                value: "Weekly",
            },
            {
                label: "Fortnightly",
                value: "Fortnightly",
            },
            {
                label: "Monthly",
                value: "Monthly",
            },
        ];
    }

    renderButton() {
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
                        <TextField
                            label={"Chore"}
                            placeholder={"Clean living room"}
                            value={this.props.choreNameValue}
                            onChangeText={this.props.onChangeChoreName}/>
                    </CardSection>
                    <CardSection>
                        <PickerField
                            label={"Interval"}
                            selectedValue={this.props.choreIntervalValue}
                            onValueChange={this.props.onChangeChoreInterval}
                            items={this.items}/>
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
    choreIntervalValue: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};