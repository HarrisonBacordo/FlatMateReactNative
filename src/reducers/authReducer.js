import {LOG_IN, LOG_OUT, RESET_PASSWORD, SIGN_UP} from "../actions/types";

const initialState = {
    userId: '',
    flatId: 'Unassigned',
    email: '',
    firstName: '',
    lastName: '',

    isLoggedIn: false,
};

export default function (state = initialState, action) {
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
        case RESET_PASSWORD:
            //TODO probably return something more logical here
            return state;
        default:
            return state;
    }
}