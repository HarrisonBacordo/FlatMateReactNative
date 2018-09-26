import {FETCH_FLATMATES, FETCH_CURRENT_FLATMATE_DATA, CREATE_FLATMATE} from "./types";
import * as firebase from 'firebase';

let firestore = firebase.firestore();
let storage = firebase.storage();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const fetchCurrentFlatmateData = (userId) => async dispatch => {
    const userDoc = await firestore.doc('users/' + userId).get();
    return dispatch({
        type: FETCH_CURRENT_FLATMATE_DATA,
        payload: {
            email: userDoc.get('email'),
            flatId: userDoc.get('flatKey'),
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
    let storageRef = storage.ref('profile_pictures/' + userId + '.jpg');
    storageRef.getDownloadURL().then(uri => {
        firestore.doc(`users/${userId}`).set({
            profPicUri: uri,
            email: flatmateData.email,
            flatId: flatmateData.flatId,
            firstName: flatmateData.firstName,
            lastName: flatmateData.lastName,
            fullName: flatmateData.fullName,
            nudgeCount: flatmateData.nudgeCount,
        });
        return dispatch({
            type: CREATE_FLATMATE,
            payload: {
                profPicUri: uri,
                email: flatmateData.email,
                flatId: flatmateData.flatId,
                firstName: flatmateData.firstName,
                lastName: flatmateData.lastName,
                fullName: flatmateData.fullName,
                nudgeCount: flatmateData.nudgeCount,
            },
        });
    });
};
