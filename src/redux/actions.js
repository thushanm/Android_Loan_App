// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_LOANS_SUCCESS = 'FETCH_LOANS_SUCCESS';
export const FETCH_LOANS_FAILURE = 'FETCH_LOANS_FAILURE';
export const SUBMIT_LOAN_SUCCESS = 'SUBMIT_LOAN_SUCCESS';
export const SUBMIT_LOAN_FAILURE = 'SUBMIT_LOAN_FAILURE';


const MOCK_LOANS = [
    { id: 1, amount: 5000, term: 12 },
    { id: 2, amount: 10000, term: 24 },
];


export const login = (username, password) => (dispatch) => {
    if (username === 'test' && password === 'password') {
        dispatch({ type: LOGIN_SUCCESS, payload: { name: username } });
    } else {
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
    }
};

export const fetchLoans = () => (dispatch) => {
    try {
     dispatch({ type: FETCH_LOANS_SUCCESS, payload: MOCK_LOANS });
    } catch (error) {
        dispatch({ type: FETCH_LOANS_FAILURE, payload: error.message });
    }
};

export const submitLoan = (loanDetails) => (dispatch) => {
    try {

        const newLoan = { ...loanDetails, id: Math.random() }; // Create a random ID
        dispatch({ type: SUBMIT_LOAN_SUCCESS, payload: newLoan });
    } catch (error) {
        dispatch({ type: SUBMIT_LOAN_FAILURE, payload: error.message });
    }
};
