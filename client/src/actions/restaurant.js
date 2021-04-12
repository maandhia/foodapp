import api from '../utils/api';
import { GET_RESTAURANTS, RESTAURANTS_ERROR, RESET_LOADING } from './types';

// Get restaurants
export const getRestaurants = (params = null) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_LOADING,
    });
    const res = await api.post('/restaurants', params);
    dispatch({
      type: GET_RESTAURANTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESTAURANTS_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};
