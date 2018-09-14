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

export class JoinFlatForm extends Component<Props> {
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
                    <Button onPress={this.props.onSubmit} text={"Join Flat"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"Flat ID"} placeholder={"Apples"} value={this.props.flatIdValue} onChangeText={this.props.onChangeFlatId}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

JoinFlatForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeFlatId: PropTypes.func.isRequired,
    flatIdValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};