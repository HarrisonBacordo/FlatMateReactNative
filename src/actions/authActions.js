import {FAIL, LOG_IN, RESET_PASSWORD, SETUP_PROFILE, SIGN_OUT, SIGN_UP} from "./types";
import * as firebase from 'firebase';

let auth = new firebase.auth();
let storage = new firebase.storage();
let firestore = new firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


export const logIn = (loginData) => dispatch => {
    return authenticateUser('harryjab@gmail.com', 'bobohobo1')
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

export const setupProfile = (blob) => dispatch => {
    let user = auth.currentUser;
    let storageRef = storage.ref('profile_pictures/' + user.uid + '.jpg');
    return storageRef.put(blob).then(() => {
        dispatch({
            type: SETUP_PROFILE
        })
    }).catch(error =>
        console.log(error));
};

export const resetPassword = (email) => dispatch => {
    return auth.sendPasswordResetEmail(email).then(() =>
        dispatch(notifyPasswordReset)
    );
};

export const signOut = () => dispatch => {
    return auth.signOut().then(() =>
        dispatch(notifySignOut)
    );
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

function notifyPasswordReset() {
    return {
        type: RESET_PASSWORD,
    }
}

function notifySignOut() {
    return {
        type: SIGN_OUT,
    }
}

function sendErrorMessage(error) {
    return {
        type: FAIL,
        payload: error,
    }
}
