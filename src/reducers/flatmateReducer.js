import {CREATE_FLATMATE, FETCH_FLATMATES, FETCH_CURRENT_FLATMATE_DATA, JOIN_FLAT} from "../actions/types";

const initialState = {
    userId: '',
    flatKey: 'Unassigned',
    email: '',
    firstName: '',
    lastName: '',
    nudgeCount: '',
    flatmates: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_FLATMATE_DATA:
        case CREATE_FLATMATE:
            console.log("IN REDUCER");
            return {
                ...state,
                email: action.payload.email,
                flatKey: action.payload.flatId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                fullName: action.payload.fullName,
                nudgeCount: action.payload.nudgeCount,
            };
        case FETCH_FLATMATES:
            return {
                ...state,
                flatmates: action.payload,
            };
        case JOIN_FLAT:
            return {
                ...state,
                flatKey: action.payload.flatKey,
            };
        default:
            return state;
    }
}
