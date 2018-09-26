import {
    NEW_FLAT,
    JOIN_FLAT,
    FETCH_FLAT_DATA,
    NEW_GROCERY,
    NEW_CHORE,
    NEW_REMINDER,
    REMOVE_CHORE, REMOVE_REMINDER, REMOVE_GROCERY, TOGGLE_CHORE
} from "../actions/types";

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
        case REMOVE_CHORE:
            tempList = [];
            state.chores.forEach(chore => {
                if (chore.id !== action.payload) {
                    tempList.push(chore);
                }
            });
            return {
                ...state,
                chores: tempList
            };
        case REMOVE_REMINDER:
            tempList = [];
            state.reminders.forEach(chore => {
                if (chore.id !== action.payload) {
                    tempList.push(chore);
                }
            });
            return {
                ...state,
                reminders: tempList
            };
        case REMOVE_GROCERY:
            tempList = [];
            state.groceries.forEach(chore => {
                if (chore.id !== action.payload) {
                    tempList.push(chore);
                }
            });
            return {
                ...state,
                groceries: tempList
            };
        case TOGGLE_CHORE:
            tempList = [];
            state.chores.forEach(chore => {
                if (chore.id === action.payload.choreId) {
                    let tempChore = chore;
                    tempChore.completed = action.payload.value;
                    tempList.push(tempChore);
                } else {
                    tempList.push(chore);
                }
            });
            return {
                ...state,
                chores: tempList
            };
        default:
            return state;
    }
}
