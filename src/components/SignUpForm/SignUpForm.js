import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../../config/colors";
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {TextField} from "../TextField";
import {Button} from "../Button";
import {Spinner} from "../Spinner";
import ImagePicker from 'react-native-image-picker';

type Props = {};

export class SignUpForm extends Component<Props> {

    constructor() {
        super();
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.props.onChangePictureUri(source);
            }
        });
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
                    <Button onPress={this.props.onSubmit} text={"Submit"} color={colors.buttonColor}/>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <View style={styles.container}>
                            <TouchableOpacity onPress={this.selectPhotoTapped}>
                                <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                                    {this.props.pictureUriValue === null ? <Text>Select a Photo</Text> :
                                        <Image style={styles.avatar} source={this.props.pictureUriValue}/>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <TextField label={"First Name"} placeholder={"John"} value={this.props.firstNameValue}
                                   onChangeText={this.props.onChangeFirstName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Last Name"} placeholder={"Appleseed"} value={this.props.lastNameValue}
                                   onChangeText={this.props.onChangeLastName}/>
                    </CardSection>
                    <CardSection>
                        <TextField label={"Email"} placeholder={"example@domain.com"} value={this.props.emailValue}
                                   onChangeText={this.props.onChangeEmail}/>
                    </CardSection>
                    <CardSection>
                        <TextField isPassword label={"Password"} placeholder={"Password here"}
                                   value={this.props.passwordValue} onChangeText={this.props.onChangePassword}/>
                    </CardSection>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}


SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangePictureUri: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    pictureUriValue: PropTypes.object,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};