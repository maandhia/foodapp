import { combineReducers } from 'redux';
import alert from './alert';
import restaurant from './restaurant';

// import formulaForm from './post';
// import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  alert,
  restaurant,
});
