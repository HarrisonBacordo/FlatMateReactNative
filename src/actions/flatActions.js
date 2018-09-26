import {
    NEW_FLAT,
    JOIN_FLAT,
    FETCH_FLAT_DATA,
    NEW_CHORE,
    REMOVE_CHORE,
    TOGGLE_CHORE,
    NEW_GROCERY,
    REMOVE_GROCERY, TOGGLE_GROCERY, NEW_REMINDER, REMOVE_REMINDER, NUDGE_CHORE
} from "./types";
import * as firebase from 'firebase';

let firestore = firebase.firestore();
let choresCollection;
let remindersCollection;
let groceriesCollection;
let currentFlatId;

export const newFlat = (data) => async dispatch => {
    const ref = firestore.collection('flats').doc();
    const id = ref.id;
    await ref.set({'flatName': data.flatName});
    return firestore.doc(`users/${data.userId}`).update('flatId', id).then(() =>
        dispatch({
            type: NEW_FLAT,
            payload: {
                flatId: id,
                flatName: data.flatName,
            },
        })
    )
};

export const joinFlat = (data) => async dispatch => {
    const promise = await firestore.collection('flats').doc(data.flatId).get();
    if (!promise.exists) {
        return alert('Can\'t find flat');
    } else {
        return await firestore.doc(`users/${data.userId}`).update('flatId', data.flatId)
            .then(() =>
                dispatch({
                    type: JOIN_FLAT,
                    payload: {
                        flatId: data.flatId,
                    },
                })
            )
    }
};

export const fetchFlatData = (_flatId) => async dispatch => {
    currentFlatId = _flatId;
    choresCollection = await firestore.collection(`flats/${_flatId}/chores`).get();
    const choresList = toList(choresCollection);
    remindersCollection = await firestore.collection(`flats/${_flatId}/reminders`).get();
    const remindersList = toList(remindersCollection);
    groceriesCollection = await firestore.collection(`flats/${_flatId}/groceries`).get();
    const groceriesList = toList(groceriesCollection);

    return dispatch({
        type: FETCH_FLAT_DATA,
        payload: {
            flatId: currentFlatId,
            chores: choresList,
            reminders: remindersList,
            groceries: groceriesList,
        }
    })
};

function toList(query) {
    let returnList = [];
    query.forEach(doc => {
        returnList.push({
            id: doc.id,
            ...doc.data(),
        })
    });
    return returnList;
}

export const fetchChores = () => dispatch => {

};

export const newChore = (choreData) => dispatch => {
    let doc = firestore.collection(`flats/${currentFlatId}/chores`).doc();
    return doc.set({...choreData, id: doc.id}).then(() => {
        dispatch({
            type: NEW_CHORE,
            payload: {
                id: doc.id,
                ...choreData,
            },
        })
    });
};

export const deleteChore = (choreId) => dispatch => {
    return firestore.doc(`flats/${currentFlatId}/chores/${choreId}`).delete().then(() => {
        dispatch({
            type: REMOVE_CHORE,
            payload: choreId,
        })
    });
};

export const nudgeChore = (choreData) => async dispatch => {
    const docSnapshot = await firestore.doc(`users/${choreData.id}`).get();
    return docSnapshot.ref.update('nudgeCount', ++docSnapshot.data().nudgeCount).then(() =>
    dispatch({
        type: NUDGE_CHORE,
        payload: docSnapshot.data().nudgeCount
    }))
};

export const toggleChore = (choreId, value) => dispatch => {
    return firestore.doc(`flats/${currentFlatId}/chores/${choreId}`).update('completed', value).then(() => {
        dispatch({
            type: TOGGLE_CHORE,
            payload: {
                choreId: choreId,
                value: value,
            }
        })
    });
};

export const fetchGroceries = () => dispatch => {

};

export const newGrocery = (groceryData) => dispatch => {
    let doc = firestore.collection(`flats/${currentFlatId}/groceries`).doc();
    return doc.set({...groceryData, id: doc.id}).then(() => {
        dispatch({
            type: NEW_GROCERY,
            payload: {
                id: doc.id,
                ...groceryData,
            },
        })
    });
};

export const deleteGrocery = (groceryId) => dispatch => {
    return firestore.doc(`flats/${currentFlatId}/groceries/${groceryId}`).delete().then(() => {
        dispatch({
            type: REMOVE_GROCERY,
            payload: groceryId,
        })
    });
};

export const toggleGrocery = (groceryId) => dispatch => {
    return firestore.doc(`flats/${currentFlatId}/groceries/${groceryId}`).update('completed', value).then(() => {
        dispatch({
            type: TOGGLE_GROCERY,
            payload: groceryId,
        })
    });
};

export const fetchReminders = () => dispatch => {

};

export const newReminder = (reminderData) => dispatch => {
    let doc = firestore.collection(`flats/${currentFlatId}/reminders`).doc();
    return doc.set({...reminderData, id: doc.id}).then(() => {
        dispatch({
            type: NEW_REMINDER,
            payload: {
                id: doc.id,
                ...reminderData,
            },
        })
    });
};

export const deleteReminder = (reminderId) => dispatch => {
    return firestore.doc(`flats/${currentFlatId}/reminders/${reminderId}`).delete().then(() => {
        dispatch({
            type: REMOVE_REMINDER,
            payload: reminderId,
        })
    });
};
