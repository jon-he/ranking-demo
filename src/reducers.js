import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isFetching: false,
  error: false,
  data: []
};

export function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_REQUESTED':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state
  }
}

export default combineReducers({
  listReducer
});
