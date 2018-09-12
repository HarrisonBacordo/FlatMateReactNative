import {LOG_IN, SIGN_UP, RESET_PASSWORD, FETCH_CURRENT_FLATMATE_DATA} from "./types";
import * as firebase from 'firebase';

let auth = new firebase.auth();
let firestore = new firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


export const logIn = (loginData) => dispatch => {
    return authenticateUser("harrisonbacordo@gmail.com", "Bobohobo1!")
        .then(() =>
            dispatch(setUserId(auth.currentUser.uid, LOG_IN))
        );
};

export const signUp = (email, password) => dispatch => {
    return auth.createUserWithEmailAndPassword(email, password)
        .then(() =>
            dispatch(setUserId(auth.currentUser.uid, SIGN_UP))
        );
};

export const resetPassword = () => dispatch => {

};

const authenticateUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

function setUserId(userId, actionType) {
    return {
        type: actionType,
        payload: userId,
    };
}
