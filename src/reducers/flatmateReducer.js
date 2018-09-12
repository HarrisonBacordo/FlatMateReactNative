import {CREATE_FLATMATE, FETCH_FLATMATES, FETCH_CURRENT_FLATMATE_DATA} from "../actions/types";

const initialState = {
    currentFlatMate: {
        userId: '',
        flatKey: 'Unassigned',
        email: '',
        firstName: '',
        lastName: '',
        nudgeCount: '',
        flatmates: [],
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_FLATMATE_DATA:
        case CREATE_FLATMATE:
            console.log("IN REDUCER");
            return {
                ...state,
                email: action.payload.email,
                flatKey: action.payload.flatKey,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                fullName: action.payload.fullName,
                nudgeCount: action.payload.nudgeCount,
            };
        default:
            return state;
    }
}
