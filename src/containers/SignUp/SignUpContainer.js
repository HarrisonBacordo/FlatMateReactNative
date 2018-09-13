import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from "./SignUp";
import {signUp} from "../../actions/authActions";
import {createFlatmate} from "../../actions/flatmateActions";
import Login from "../Login/Login";

type Props = {};

class SignUpContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.auth.isLoggedIn) {
            this.props.navigation.navigate('Chores');
        }
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

    onSubmit(e) {
        const signUpData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            fullName: this.state.firstName + " " + this.state.lastName,
            email: this.state.email,
            flatId: 'Unassigned',
            nudgeCount: 0,
        };
        this.props.signUp(this.state.email, this.state.password).then(() =>
            this.props.createFlatmate(this.props.auth.userId, signUpData)
        );
    }

    render() {
        return <SignUp
            firstNameValue={this.state.firstName}
            lastNameValue={this.state.lastName}
            emailValue={this.state.email}
            passwordValue={this.state.password}
            onChangeFirstName={this.onChangeFirstName}
            onChangeLastName={this.onChangeLastName}
            onChangeEmail={this.onChangeEmail}
            onChangePassword={this.onChangePassword}
            onSubmit={this.onSubmit}/>
    }
}

SignUpContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {signUp, createFlatmate})(SignUpContainer)