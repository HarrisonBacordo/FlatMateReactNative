import {NEW_FLAT, JOIN_FLAT, FETCH_FLAT_DATA, NEW_GROCERY, NEW_CHORE, NEW_REMINDER} from "../actions/types";

const initialState = {
    flatId: '',
    flatName: '',
    chores: [],
    reminders: [],
    groceries: [],
};

export default function(state=initialState, action) {
    let tempList;
    switch (action.type) {
        case FETCH_FLAT_DATA:
            return {
                ...state,
                flatId: action.payload.flatId,
                chores: action.payload.chores,
                reminders: action.payload.reminders,
                groceries: action.payload.groceries,
            };
        case NEW_FLAT:
            return {
                ...state,
                flatId: action.payload.flatId,
                flatName: action.payload.flatName
            };
        case JOIN_FLAT:
            return {
                ...state,
                flatId: action.payload.flatId,
            };
        case NEW_REMINDER:
            tempList = state.reminders;
            tempList.push(action.payload);
            return {
                ...state,
                reminders: tempList,
            };
        case NEW_CHORE:
            tempList = state.chores;
            tempList.push(action.payload);
            return {
                ...state,
                chores: tempList,
            };
        case NEW_GROCERY:
            tempList = state.groceries;
            tempList.push(action.payload);
            return {
                ...state,
                groceries: tempList,
            };
        default:
            return state;
    }
}
