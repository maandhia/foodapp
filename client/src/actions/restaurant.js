import api from '../utils/api';
// import { setAlert } from './alert';
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

// // solve a formula. redundant because it doesnt make a request.
// export const solveFormula = (answer) => async (dispatch) => {
//   try {
//     dispatch({
//       type: SOLVE_FORMULA,
//       payload: answer,
//     });
//   } catch (err) {
//     dispatch({
//       type: RESTAURANTS_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
