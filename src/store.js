/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your combined reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
*/
// store.js
import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from "./state/slices/aboutSlice"
import userReducer from './reducers/userReducer'; // adjust the path as necessary

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    userReducer: userReducer,
  },
});