import {LOG_IN, RESET_PASSWORD, SIGN_OUT, SIGN_UP} from "../actions/types";

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
        case SIGN_OUT:
            return {
                ...state,
                userId: '',
                flatId: 'Unassigned',
                email: '',
                firstName: '',
                lastName: '',
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