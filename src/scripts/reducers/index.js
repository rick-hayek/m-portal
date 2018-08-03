import { combineReducers } from 'redux';
import user from './user';
import performance from './sys';

export default combineReducers({ user, performance });
//export default user;