import {
  REQUEST_REGISTER_PENDING,
  REQUEST_REGISTER_SUCCESS,
  REQUEST_REGISTER_FAILURE,
  REQUEST_LOGIN_PENDING,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from "./types";

import { jFetch, aFetch } from "../../utils";

export const execRegisterRequest = (userData) => (dispatch) => {
  dispatch({
    type: REQUEST_REGISTER_PENDING
  });

  jFetch("/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)

  }).then((srvResponse) => {
    if (srvResponse.success) {
      dispatch({
        type: REQUEST_REGISTER_SUCCESS
      })
    } else {
      dispatch({
        type: REQUEST_REGISTER_FAILURE,
        payload: {
          message: srvResponse.message
        }
      });
    }
  }).catch((err) => {
    dispatch({
      type: REQUEST_REGISTER_FAILURE,
      payload: {
        message: err.message
      }
    });
  });
};

export const execLoginRequest = (userData) => (dispatch) => {
  dispatch({
    type: REQUEST_LOGIN_PENDING
  });

  jFetch("/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  }).then((srvResponse) => {
    if (srvResponse.success) {
      localStorage.setItem("jwtToken", srvResponse.token);
      dispatch({
        type: REQUEST_LOGIN_SUCCESS,
        payload: srvResponse.data
      })
    } else {
      dispatch({
        type: REQUEST_LOGIN_FAILURE,
        payload: {
          message: srvResponse.message
        }
      });
    }
  })
    .catch((err) => {
      dispatch({
        type: REQUEST_LOGIN_FAILURE,
        payload: {
          message: err.message
        }
      })
    });
}

export const execWhoamiRequest = () => (dispatch) => {
  aFetch("/whoami").then((srvResponse) => {
    if(srvResponse.success){
      dispatch({
        type: REQUEST_LOGIN_SUCCESS,
        payload: srvResponse.data
      })
    }
  })
}