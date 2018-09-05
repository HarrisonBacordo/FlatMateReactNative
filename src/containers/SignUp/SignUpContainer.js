import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import SignUp from "./SignUp";

type Props = {};

export class SignUpContainer extends Component<Props> {
    render() {
        return <SignUp/>
    }
}

SignUpContainer.propTypes = {};

const styles = StyleSheet.create({});