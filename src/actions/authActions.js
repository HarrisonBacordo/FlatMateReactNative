import {LOG_IN, SIGN_UP, RESET_PASSWORD} from "./types";
import * as firebase from 'firebase';

const auth = new firebase.auth();

export const logIn = (loginData) => dispatch => {
    console.log("E");
};

export const signUp = (signupData) => dispatch => {

};

export const resetPassword = () => dispatch => {

};
