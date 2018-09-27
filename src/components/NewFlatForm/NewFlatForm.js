import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";

type Props = {};

export class NewFlatForm extends Component<Props> {
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
                    <Button onPress={this.props.onSubmit} text={"Create Flat"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card>
                    <CardSection>
                        <TextField label={"Flat Name"} placeholder={"My Flat"} value={this.props.flatNameValue}
                                   onChangeText={this.props.onChangeFlatName}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

NewFlatForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeFlatName: PropTypes.func.isRequired,
    flatNameValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};