import {
  REQUEST_REGISTER_PENDING,
  REQUEST_REGISTER_SUCCESS,
  REQUEST_REGISTER_FAILURE
} from "./types";

import jFetch from "../../utils/jFetch";

export const execRegisterRequest = (userData) => (dispatch) => {
  dispatch({
    type: REQUEST_REGISTER_PENDING
  });

  jFetch("/register", {
    method: "POST",
    body: userData
  }).then((srvResponse) => {
    if(srvResponse.success){
      dispatch({
        type: REQUEST_REGISTER_SUCCESS
      })
    } else {
      dispatch({
        type: REQUEST_REGISTER_FAILURE,
        payload: {
          message: srvResponse.message
        }
      })
    }
  })
}