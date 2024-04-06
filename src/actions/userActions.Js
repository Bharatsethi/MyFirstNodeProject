import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const SEARCH_USER = 'SEARCH_USER';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3002/api/users');
      console.log('User data', response.data)
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      //dispatch({ type: FETCH_USERS_FAILURE, payload: response.data  })
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};

export const searchUser = (name) => {
  return { type: SEARCH_USER, payload: name };
};
