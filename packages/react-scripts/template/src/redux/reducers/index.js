import { CHECKING } from '../actionTypes';

const initialState = {
  initial: 5,
};

function check(state = initialState, action) {
  switch (action.type) {
    case CHECKING:
      return {
        initial: action.payload,
      };
  }
  return state;
}

export default check;
