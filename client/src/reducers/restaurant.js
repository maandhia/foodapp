import {
  GET_RESTAURANTS,
  RESET_LOADING,
  RESTAURANTS_ERROR,
} from '../actions/types';

export default (
  state = {
    loading: true,
    restaurants: [],
    error: {},
  },
  { type, payload }
) => {
  switch (type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        /*data: payload,*/ restaurants: payload,
        loading: false,
      };
    case RESTAURANTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
