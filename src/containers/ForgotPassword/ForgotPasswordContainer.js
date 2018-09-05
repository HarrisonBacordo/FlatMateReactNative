import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import ForgotPassword from "./ForgotPassword";

type Props = {};

export class ForgotPasswordContainer extends Component<Props> {
    render() {
        return (
            <ForgotPassword />
        );
    }
}

ForgotPasswordContainer.propTypes = {};

const styles = StyleSheet.create({});