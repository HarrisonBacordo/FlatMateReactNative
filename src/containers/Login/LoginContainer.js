import React, {Component} from 'react';
import {logIn} from '../../actions/authActions';
import {connect} from 'react-redux';
import Login from "./Login";
import {fetchCurrentFlatmateData} from "../../actions/flatmateActions";
import {fetchFlatData, newGrocery} from "../../actions/flatActions";

type Props = {};

class LoginContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeEmail(text) {
        this.setState({email: text});
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    async onSubmit(e) {
        const loginData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({loading: true});
        const promise = await this.props.logIn(loginData);
        if(promise !== undefined) {
            this.props.fetchCurrentFlatmateData(this.props.auth.userId).then(() => {
                this.props.fetchFlatData(this.props.flatmates.flatId).then(() => {
                    this.props.navigation.navigate('Chores');
                })
            })
        }
    }

    render() {
        return <Login
            emailValue={this.state.email}
            passwordValue={this.state.password}
            onChangeEmail={this.onChangeEmail}
            onChangePassword={this.onChangePassword}
            onSubmit={this.onSubmit}
            loading={this.state.loading}
            navigation={this.props.navigation}/>
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    flatmates: state.flatmates,
    flat: state.flat,
});

export default connect(mapStateToProps, {logIn, fetchCurrentFlatmateData, fetchFlatData, newGrocery})(LoginContainer)