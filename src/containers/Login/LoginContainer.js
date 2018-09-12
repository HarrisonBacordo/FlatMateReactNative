import React, {Component} from 'react';
import {logIn} from '../../actions/authActions';
import {connect} from 'react-redux';
import Login from "./Login";
import {fetchCurrentFlatmateData} from "../../actions/flatmateActions";
import {fetchFlatData} from "../../actions/flatActions";

type Props = {};

class LoginContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        // if (nextProps.auth.isLoggedIn) {
        //     this.props.navigation.navigate('Chores');
        // }
    }

    onChangeEmail(text) {
        this.setState({email: text});
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    onSubmit(e) {
        const loginData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.logIn(loginData).then(() =>
            this.props.fetchUserData(this.props.auth.userId)
        ).then(() =>
            this.props.fetchFlatData(this.props.flatmates.flatKey)
        );
    }

    render() {
        return <Login
            emailValue={this.state.email}
            passwordValue={this.state.password}
            onChangeEmail={this.onChangeEmail}
            onChangePassword={this.onChangePassword}
            onSubmit={this.onSubmit}
            navigation={this.props.navigation}/>
    }
}

LoginContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
    flatmates: state.flatmates
});

export default connect(mapStateToProps, {logIn, fetchUserData: fetchCurrentFlatmateData, fetchFlatData})(LoginContainer)