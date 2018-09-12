import {LOG_IN, LOG_OUT, SIGN_UP, RESET_PASSWORD, FETCH_CURRENT_FLATMATE_DATA} from "../actions/types";

const initialState = {
    userId: '',
    flatKey: 'Unassigned',
    email: '',
    firstName: '',
    lastName: '',

    isLoggedIn: false,
};

export default function(state=initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                userId: action.payload,
                isLoggedIn: true,
            };
        case LOG_OUT:
            return {
                ...state,
                userId: '',
                isLoggedIn: false,
            };
        case SIGN_UP:
            return {
                ...state,
                userId: action.payload,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}