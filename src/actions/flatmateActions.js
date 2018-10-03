import {CREATE_FLATMATE, FETCH_CURRENT_FLATMATE_DATA, FETCH_FLATMATES} from "./types";
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
            profPicUri: userDoc.get('profPicUri'),
            email: userDoc.get('email'),
            flatId: userDoc.get('flatId'),
            firstName: userDoc.get('firstName'),
            lastName: userDoc.get('lastName'),
            fullName: userDoc.get('fullName'),
            nudgeCount: userDoc.get('nudgeCount'),
            userId: userId,
        }
    });
};

export const fetchFlatmates = (flatId) => async dispatch => {
    const flatmateIds = {};
    const query = firestore.collection('users').where('flatId', '==', flatId);
    const promise = await query.get();
    promise.forEach(doc => {
        flatmateIds[doc.id] = {id: doc.id, fullName: doc.data().fullName, profPicUri: doc.data().profPicUri,};
    });
    return dispatch({
        type: FETCH_FLATMATES,
        payload: flatmateIds,
    })
};

export const createFlatmate = (userId, flatmateData) => dispatch => {
    let storageUserId;
    if(flatmateData.profPicUri === null) {
        storageUserId = 'default_profpic';
    } else {
        storageUserId = userId;
    }
    let storageRef = storage.ref('profile_pictures/' + storageUserId + '.jpg');
    storageRef.getDownloadURL().then(uri => {
        firestore.doc(`users/${userId}`).set({
            profPicUri: uri,
            userId: userId,
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
                userId: userId,
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
