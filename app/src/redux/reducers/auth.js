import {
  REQUEST_REGISTER_PENDING,
  REQUEST_REGISTER_SUCCESS,
  REQUEST_REGISTER_FAILURE,
  REQUEST_LOGIN_PENDING,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from "../actions/types";

const initialState = {
  authenticated: false,
  userData: null,
  requestIsPending: false,
  requestSucceeded: false,
  requestFailed: false,
  failureMessage: ""
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_REGISTER_PENDING: {
      return {
        ...state,
        requestIsPending: true,
        requestSucceeded: false,
        requestFailed: false
      };
    }

    case REQUEST_REGISTER_SUCCESS: {
      return {
        ...state,
        requestIsPending: false,
        requestSucceeded: true,
        requestFailed: false
      };
    }

    case REQUEST_REGISTER_FAILURE: {
      return {
        ...state,
        requestIsPending: false,
        requestSucceeded: false,
        requestFailed: true,
        failureMessage: action.payload.message
      };
    }

    case REQUEST_LOGIN_PENDING: {
      return {
        ...state,
        requestIsPending: true,
        requestSucceeded: false,
        requestFailed: false
      };
    }

    case REQUEST_LOGIN_SUCCESS: {
      return {
        ...state,
        requestIsPending: false,
        requestSucceeded: true,
        requestFailed: false,
        authenticated: true,
        userData: action.payload
      };
    }

    case REQUEST_LOGIN_FAILURE: {
      return {
        ...state,
        authenticated: false,
        requestIsPending: false,
        requestSucceeded: false,
        requestFailed: true,
        failureMessage: action.payload.message
      };
    }
    
    default:
      return state;
  }
};

export default authReducer;
