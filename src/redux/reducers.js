import { combineReducers } from 'redux';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SUBMIT_LOAN_SUCCESS,
    SUBMIT_LOAN_FAILURE,
    FETCH_LOANS_SUCCESS,
    FETCH_LOANS_FAILURE,
} from './actions';


const initialAuthState = {
    user: null,
    error: null,
};

const initialLoanState = {
    list: [],
    error: null,
};


const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, error: action.payload };
        default:
            return state;
    }
};


const loanReducer = (state = initialLoanState, action) => {
    switch (action.type) {
        case FETCH_LOANS_SUCCESS:
            return { ...state, list: action.payload, error: null };
        case SUBMIT_LOAN_SUCCESS:
            return { ...state, list: [...state.list, action.payload] };
        case FETCH_LOANS_FAILURE:
        case SUBMIT_LOAN_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    auth: authReducer,
    loans: loanReducer,
});

export default rootReducer;
