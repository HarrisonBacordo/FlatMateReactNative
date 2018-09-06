import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForgotPassword from "./ForgotPassword";

type Props = {};

class ForgotPasswordContainer extends Component<Props> {

    render() {
        return <ForgotPassword/>
    }
}

ForgotPasswordContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(ForgotPasswordContainer)