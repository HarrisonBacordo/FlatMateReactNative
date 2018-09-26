import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from "./SignUp";
import {signUp, setupProfile} from "../../actions/authActions";
import {createFlatmate, fetchFlatmates} from "../../actions/flatmateActions";

type Props = {};

class SignUpContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            pictureUri: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            loading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePictureUri = this.onChangePictureUri.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangePictureUri(uri) {
        this.setState({pictureUri: uri});
    }

    onChangeFirstName(text) {
        this.setState({firstName: text});
    }

    onChangeLastName(text) {
        this.setState({lastName: text});
    }

    onChangeEmail(text) {
        this.setState({email: text});
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    async onSubmit(e) {
        const response = await fetch(this.state.pictureUri.uri);
        const blob = await response.blob();
        const signUpData = {
            profPicUri: blob,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            fullName: this.state.firstName + " " + this.state.lastName,
            email: this.state.email,
            flatId: 'Unassigned',
            nudgeCount: 0,
        };
        this.setState({loading: true});
        await this.props.signUp(this.state.email, this.state.password);
        await this.props.setupProfile(blob);
        await this.props.createFlatmate(this.props.auth.userId, signUpData);
        await this.props.fetchFlatmates(this.props.auth.flatId);
        this.setState({loading: false});
        this.props.navigation.navigate('Chores');
    }

    render() {
        return <SignUp
            pictureUriValue={this.state.pictureUri}
            firstNameValue={this.state.firstName}
            lastNameValue={this.state.lastName}
            emailValue={this.state.email}
            passwordValue={this.state.password}
            onChangePictureUri={this.onChangePictureUri}
            onChangeFirstName={this.onChangeFirstName}
            onChangeLastName={this.onChangeLastName}
            onChangeEmail={this.onChangeEmail}
            onChangePassword={this.onChangePassword}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

SignUpContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {signUp, createFlatmate, setupProfile, fetchFlatmates})(SignUpContainer)