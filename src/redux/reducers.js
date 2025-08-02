import { LOGIN, LOGOUT, ADD_LOAN_APPLICATION, UPDATE_LOAN_APPLICATION, DELETE_LOAN_APPLICATION } from './actions';
import { combineReducers } from 'redux';

const initialLoanState = {
    applications: [],
};

const initialAuthState = {
    isLoggedIn: false,
};

function loanReducer(state = initialLoanState, action) {
    switch (action.type) {
        case ADD_LOAN_APPLICATION:
            return { ...state, applications: [...state.applications, action.payload] };
        case UPDATE_LOAN_APPLICATION:
            return {
                ...state,
                applications: state.applications.map(app =>
                    app.id === action.payload.id ? action.payload : app
                ),
            };
        case DELETE_LOAN_APPLICATION:
            return {
                ...state,
                applications: state.applications.filter(app => app.id !== action.payload),
            };
        default:
            return state;
    }
}

function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true };
        case LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export default combineReducers({
    loanReducer,
    authReducer,
});