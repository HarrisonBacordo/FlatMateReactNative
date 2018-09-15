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
            loading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    onChangeEmail(text) {
        this.setState({email: text});
    }

    onSubmit(e) {
        this.setState({loading: true});
        this.props.resetPassword(this.state.email).then(() => {
            this.setState({loading: false});
            alert('An password reset link has been sent to ' + this.state.email);

        })
    }

    render() {
        return <ForgotPassword
            emailValue={this.state.email}
            onChangeEmail={this.onChangeEmail}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {resetPassword})(ForgotPasswordContainer);