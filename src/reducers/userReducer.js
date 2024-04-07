// userReducer.js
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SEARCH_USER } from '../actions/userActions';

const initialState = {
  users: [], // Initial value for users array
  searchResult: '' // Initial value for searchResult
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, error: action.payload };
    case SEARCH_USER:
      return { ...state, searchResult: action.payload };
    default:
      return state; // Return current state if action type is not recognized
  }
};

export default userReducer;
