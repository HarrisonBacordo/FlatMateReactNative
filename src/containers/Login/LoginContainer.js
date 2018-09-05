import React, {Component} from 'react';
import {logIn} from '../../actions/authActions';
import { connect } from 'react-redux';
import Login from "./Login";
import {bindActionCreators} from "redux";

type Props = {};
class LoginContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const loginData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.actions.logIn(loginData);
    }

    render() {
        return <Login onSubmit={this.onSubmit} navigation={this.props.navigation}/>
    }
}

Login.propTypes = {};
const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(logIn, dispatch),
});

export default connect (mapStateToProps, mapDispatchToProps)(LoginContainer)