import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isFetching: false,
  error: false,
  data: []
};

const randomScore = state => {
  const dataLength = state.data && state.data.length ? state.data.length : 0;
  if (dataLength) {
    const newData = [...state.data];
    const randomItem = Math.floor(Math.random() * dataLength);
    const randomValue = Math.floor(Math.random() * 1000);
    newData[randomItem].score += randomValue;
    newData.sort((a, b) => b.score - a.score);
    return {
      ...state,
      data: newData
    };
  }
  return state;
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
    case 'RANDOM_SCORE':
      return randomScore(state);
    default:
      return state
  }
}

export default combineReducers({
  listReducer
});
