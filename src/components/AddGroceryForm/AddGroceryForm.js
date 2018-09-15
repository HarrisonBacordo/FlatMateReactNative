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

export class AddGroceryForm extends Component<Props> {
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
                    <Button onPress={this.props.onSubmit} text={"Add Grocery"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"Grocery Name"} placeholder={"Apples"} value={this.props.groceryNameValue} onChangeText={this.props.onChangeGroceryName}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

AddGroceryForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeGroceryName: PropTypes.func.isRequired,
    groceryNameValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};