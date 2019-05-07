import { CHECKING } from 'redux/actionTypes';

// Thunk
export function checkAction(value) {
  return function(dispatch, getState) {
    dispatch({
      type: CHECKING,
      payload: value,
    });
  };
}
