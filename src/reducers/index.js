// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer, // 'user' is the slice of state managed by userReducer
  // other reducers can be added here
});

export default rootReducer;