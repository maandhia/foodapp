import { combineReducers } from 'redux';
import alert from './alert';
import restaurant from './restaurant';

export default combineReducers({
  alert,
  restaurant,
});
