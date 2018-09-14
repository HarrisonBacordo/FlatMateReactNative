import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForgotPassword from "./ForgotPassword";
import {resetPassword} from '../../actions/authActions';

type Props = {};

class ForgotPasswordContainer extends Component<Props> {
    constructor() {
        super();
        this.state = {
            email: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    onChangeEmail(text) {
        this.setState({email: text});
    }

    onSubmit(e) {
        this.props.resetPassword(this.state.email);
    }

    render() {
        return <ForgotPassword
            emailValue={this.state.email}
            onChangeEmail={this.onChangeEmail}
            onSubmit={this.onSubmit}/>
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {resetPassword})(ForgotPasswordContainer);