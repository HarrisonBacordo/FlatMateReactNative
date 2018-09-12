import {NEW_FLAT, JOIN_FLAT, FETCH_FLAT_DATA} from "./types";
import * as firebase from 'firebase';

let firestore = firebase.firestore();

export const newFlat = (flatId) => dispatch => {

};

export const joinFlat = (flatId) => dispatch => {

};

export const fetchFlatData = (flatId) => async dispatch => {
    const choreQuery = await firestore.collection(`flats/${flatId}/chores`).get();
    const choresList = toList(choreQuery);
    const remindersQuery = await firestore.collection(`flats/${flatId}/chores`).get();
    const remindersList = toList(remindersQuery);
    const groceriesQuery = await firestore.collection(`flats/${flatId}/groceries`).get();
    const groceriesList = toList(groceriesQuery);

    return dispatch({
        type: FETCH_FLAT_DATA,
        payload: {
            flatId: flatId,
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
