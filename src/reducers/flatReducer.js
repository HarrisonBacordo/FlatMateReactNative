import {NEW_FLAT, JOIN_FLAT, FETCH_FLAT_DATA} from "../actions/types";

const initialState = {
    flatId: '',
    flatName: '',
    chores: [],
    reminders: [],
    groceries: [],
};

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_FLAT_DATA:
            console.log(action);
            return {
                ...state,
                flatId: action.payload.flatId,
                chores: action.payload.chores,
                reminders: action.payload.reminders,
                groceries: action.payload.groceries,
            };
        default:
            return state;
    }
}
