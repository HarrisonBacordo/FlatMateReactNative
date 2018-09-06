import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from "./SignUp";

type Props = {};

class SignUpContainer extends Component<Props> {

    render() {
        return <SignUp/>
    }
}

SignUpContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(SignUpContainer)