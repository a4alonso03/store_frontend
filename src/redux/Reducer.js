import { combineReducers } from 'redux'
import user from './UserReducer';
import cart from './CartReducer';

export default combineReducers({ user, cart })