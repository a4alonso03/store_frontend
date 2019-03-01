import { combineReducers } from 'redux'
import user from './UserReducer';
import cart from './CartReducer';
import product from './ProductReducer'

export default combineReducers({ user, cart, product })