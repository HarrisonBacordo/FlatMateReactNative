import {
    CREATE_FLATMATE,
    FETCH_CURRENT_FLATMATE_DATA,
    FETCH_FLATMATES,
    JOIN_FLAT,
    NEW_FLAT,
    NUDGE_CHORE, SIGN_OUT
} from "../actions/types";

const initialState = {
    profPicUri: '',
    userId: '',
    flatId: 'Unassigned',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    nudgeCount: '',
    flatmates: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_FLATMATE_DATA:
        case CREATE_FLATMATE:
            return {
                ...state,
                profPicUri: action.payload.profPicUri,
                email: action.payload.email,
                flatId: action.payload.flatId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                fullName: action.payload.fullName,
                nudgeCount: action.payload.nudgeCount,
                userId: action.payload.userId,
            };
        case FETCH_FLATMATES:
            return {
                ...state,
                flatmates: action.payload,
            };
        case JOIN_FLAT:
            return {
                ...state,
                flatId: action.payload.flatId,
            };
        case NEW_FLAT:
            return {
                ...state,
                flatId: action.payload.flatId,
            };
        case NUDGE_CHORE:
            return {
                ...state,
                nudgeCount: action.payload,
            };
        case SIGN_OUT:
            return {
                ...state,
                profPicUri: '',
                userId: '',
                flatId: 'Unassigned',
                email: '',
                firstName: '',
                lastName: '',
                fullName: '',
                nudgeCount: '',
                flatmates: [],
            };
        default:
            return state;
    }
}
