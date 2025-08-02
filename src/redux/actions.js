export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_LOAN_APPLICATION = 'ADD_LOAN_APPLICATION';
export const UPDATE_LOAN_APPLICATION = 'UPDATE_LOAN_APPLICATION';
export const DELETE_LOAN_APPLICATION = 'DELETE_LOAN_APPLICATION';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
export const addLoanApplication = (application) => ({ type: ADD_LOAN_APPLICATION, payload: application });
export const updateLoanApplication = (application) => ({ type: UPDATE_LOAN_APPLICATION, payload: application });
export const deleteLoanApplication = (id) => ({ type: DELETE_LOAN_APPLICATION, payload: id });