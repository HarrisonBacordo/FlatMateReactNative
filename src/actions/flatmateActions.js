import {FETCH_FLATMATES, FETCH_CURRENT_FLATMATE_DATA, CREATE_FLATMATE} from "./types";
import * as firebase from 'firebase';

let firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const fetchCurrentFlatmateData = (userId) => async dispatch => {
    const userDoc = await firestore.doc('users/' + userId).get();
    return dispatch({
        type: FETCH_CURRENT_FLATMATE_DATA,
        payload: {
            email: userDoc.get('email'),
            flatKey: userDoc.get('flatKey'),
            firstName: userDoc.get('firstName'),
            lastName: userDoc.get('lastName'),
            fullName: userDoc.get('fullName'),
            nudgeCount: userDoc.get('nudgeCount'),
        }
    });
};

export const fetchFlatmates = (flatId) => async dispatch => {
    const flatmateIds = {};
    const query = firestore.collection('users').where('flatKey', '==', flatId);
    const promise = await query.get();
    promise.forEach(doc => {
        flatmateIds[doc.id] = doc.data().fullName;
    });
    return dispatch({
        type: FETCH_FLATMATES,
        payload: flatmateIds,
    })
};

export const createFlatmate = (userId, flatmateData) => dispatch => {
    firestore.doc(`users/${userId}`).set({...flatmateData});
    return dispatch({
        type: CREATE_FLATMATE,
        payload: {
            email: flatmateData.email,
            flatKey: flatmateData.flatKey,
            firstName: flatmateData.firstName,
            lastName: flatmateData.lastName,
            fullName: flatmateData.fullName,
            nudgeCount: flatmateData.nudgeCount,
        },
    });
};
