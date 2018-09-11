import {LOG_IN, SIGN_UP, RESET_PASSWORD} from "./types";
import * as firebase from 'firebase';

let auth = new firebase.auth();

// export const logIn = (loginData) => dispatch => {
//     console.log("IN ACTION CREATOR");
//     auth.signInWithEmailAndPassword(loginData.email, loginData.password)
//         .then(res => dispatch({
//             type: LOG_IN,
//             payload: auth.currentUser
//         }));
// };

export const logIn = loginData => dispatch => {
        console.log("IN ACTION CREATOR");
        auth.signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(res => dispatch({
                type: LOG_IN,
                payload: auth.currentUser.uid
            }));
};

export const signUp = (signupData) => dispatch => {

};

export const resetPassword = () => dispatch => {

};
